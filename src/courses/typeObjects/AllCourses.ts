export type AllCourses = {
  id: number;
  name: string;
  description: string;
  tags: {
    id: number;
    name: string;
  }[];
}[];
