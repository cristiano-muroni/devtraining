import { DataSource } from 'typeorm';
import { CourseRefactoring1680376990538 } from "./migrations/1680713819808-CourseRefactoringTest";

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db', //localhost
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [ CourseRefactoring1680376990538]
});


