export class CreateClassroomDto{
    id?:string;
    name: string=""
}

export class ClassroomTeacherDto{
    classroomId: string=""
    teacherIds: string[]=[]
}

export class ClassroomStudentDto{
    classroomId: string=""
    studentIds: string[]=[]
}

export class ClassroomQueryDto{
    name?:string;
    page: number=1;
    pageSize: number = 10;
}