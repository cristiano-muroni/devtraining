import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';


@Module({
  imports: [
    CoursesModule, 
    TypeOrmModule.forRoot(typeORMConfig),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
