import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto, UpdateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';
import { AllCourses } from './typeObjects';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async findAll() : Promise<AllCourses> {
    return await this.courseRepository.find({
      relations: ['tags'],
    }) ;
  }

  async findOne(strId: string) {
    const id = Number(strId);
    const course = await this.courseRepository.findOne({
      where: {id},
      relations: ['tags']
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return course;
  }

  async create(createCourseDto: CreateCourseDto) {
    const tags = await Promise.all(
      createCourseDto.tags.map((name) => this.preloadTagByName(name)),
    );
    const course = await this.courseRepository.create({
      ...createCourseDto,
      tags,
    });
    return this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const tags =
      updateCourseDto.tags &&
      (await Promise.all(
        updateCourseDto.tags.map((name) => this.preloadTagByName(name)),
      ));
    const course = await this.courseRepository.preload({
      id: +id,
      ...updateCourseDto,
      tags,
    });

    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }
    return this.courseRepository.save(course);
  }

  async remove(id) {
    const course = await this.courseRepository.findOne(id);
    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }
    return this.courseRepository.remove(course);
  }

  private async preloadTagByName(name: string): Promise<Tag> {
    const tag = await this.tagRepository.findOne({
      where: { name },
    });

    if (tag) {
      return tag;
    }
    return this.tagRepository.create({ name });
  }
}
