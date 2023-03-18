import { Controller, Get,Post, Param, Body, HttpCode, HttpStatus, Res, Patch, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/create-course.dto/update-course.dto';


@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){}; 
    @Get()
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : string) {
        
        return this.coursesService.findOne(id);
    }

    @Post()     
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto){
        console.log(updateCourseDto)
        return this.coursesService.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){        
        return this.coursesService.remove(id);
    }


}
