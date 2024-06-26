export class CreateClassroomDto{
    id?:string;
    name: string=""
    type: "charge" | "free"="free";
    price: number=0;
    desc?: string
    qrcode?: string
    is_show: boolean = true
    is_ai: boolean = false
    cover: string=""
}

export class ClassroomTeacherDto{
    classroomId: string=""
    teacherIds: string[]=[]
}

export class ClassroomStudentDto{
    classroomId: string=""
    studentIds: string[]=[]
}

export class ClassroomStockDto{
    classroomId: string="";
    stockIds: string[]=[]
}

export class ClassroomQueryDto{
    name?:string;
    page: number=1;
    pageSize: number = 10;
    is_ai?: boolean;
}

export class ClassroomHistoryQueryDto{
    classroomId: string="";
    page: number=1;
    pageSize: number = 10;
}