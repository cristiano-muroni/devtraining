import { Controller, Get,Post, Param, Body } from '@nestjs/common';


@Controller('courses')
export class CoursesController {
    @Get()
    findAll() {
        return 'Listagem de cursos';
    }

    @Get(':id')
    findOne(@Param('id') id : string) {
        
        return `Curso: ${id}`;
    }  
    @Post() 
    create(@Body() body) {
        return body;
    }
}