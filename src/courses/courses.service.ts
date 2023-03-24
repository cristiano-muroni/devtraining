import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/create-course.dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>
    ){}

    async findAll() {
        return await this.courseRepository.find();
    }

     findOne(id) {       

        const course =  this.courseRepository.findOne(id);              

        if(!course){
            throw new NotFoundException(`Course ID ${id} not found`);
        }
        return course;     
    }

    async create(createCourseDto: CreateCourseDto){
        const course = await this.courseRepository.create(createCourseDto);
        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCourseDto){
        const course = await this.courseRepository.preload({
            id: +id,
            ... updateCourseDto,
        });

        if(!course) {
            throw new NotFoundException(`Course Id ${id} not found`);
        }
        return this.courseRepository.save(course);
    }

    async remove(id) {        
        const course = await this.courseRepository.findOne(id);
        if(!course) {
            throw new NotFoundException(`Course Id ${id} not found`);
        }
        return this.courseRepository.remove(course)
    }
}
