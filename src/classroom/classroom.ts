export class CreateClassroomDto{
    id?:string;
    name: string=""
}

export class ClassroomTeacherDto{
    classroomId: string=""
    teacherId: string=""
}

export class ClassroomQueryDto{
    name?:string;
    page: number=1;
    pageSize: number = 10;
}