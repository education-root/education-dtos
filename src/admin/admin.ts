export class AdminInfoDto {
    id?: string;
    username: string="";
    password: string="";
    phone: string="";
    role: "admin"|"teacher"|"head_teacher"="teacher"
}

export class LoginDto {
    username: string="";
    password: string="";
    type: "admin"| "head_teacher" | "teacher" = "admin";
}

export class QueryConditionDto{
    id?: string;
    role_name?: "admin"|"teacher"|"head_teacher"
    username?: string
    phone?:string
    page: number=1;
    pageSize: number=10;
}