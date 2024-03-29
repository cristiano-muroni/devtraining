import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { coursesProviders } from './courses.providers';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';


@Module({
  imports:[DatabaseModule],
  controllers: [CoursesController],
  providers: [...coursesProviders, CoursesService ]
})
export class CoursesModule {}
