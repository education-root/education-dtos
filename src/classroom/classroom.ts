export class CreateClassroomDto{
    id?:string;
    name: string=""
}

export class ClassroomTeacherDto{
    classroomId: string=""
    teacherId: string=""
}