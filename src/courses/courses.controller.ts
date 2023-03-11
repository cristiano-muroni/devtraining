import { Controller, Get,Post, Param, Body, HttpCode, HttpStatus, Res, Patch, Delete } from '@nestjs/common';


@Controller('courses')
export class CoursesController { 
    @Get()
    findAll(@Res() response) {
        return response.status(200).send('Listagem de cursos');
    }

    @Get(':id')
    findOne(@Param('id') id : string) {
        
        return `Curso: ${id}`;
    }

    @Post() 
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body('name') body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return `Atualizando - ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        
        return `Exclusao do - ${id}`
    }


}
