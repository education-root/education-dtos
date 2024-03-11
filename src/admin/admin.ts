
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
}