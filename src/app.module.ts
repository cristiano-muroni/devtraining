import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
// npm i typeorm@0.2.45
@Module({
  imports: [
    CoursesModule, 
    TypeOrmModule.forRoot(),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
