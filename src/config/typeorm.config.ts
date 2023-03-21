import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig : TypeOrmModuleOptions = {  
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
