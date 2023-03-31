import { CoursesService } from "./courses.service"

describe('all courses', () => {
    it('nice way findAll', async () => {
        const service = new CoursesService( new FakeRepository() as any, new FakeRepository() as any) 
        service.findAll
    })
})

class FakeRepository {

}