import { ApiProperty } from '@nestjs/swagger';
export class AdminInfoDto {
    @ApiProperty()
    id?: string;
    @ApiProperty()
    username: string="";
    @ApiProperty()
    password: string="";
    @ApiProperty()
    phone: string="";
    @ApiProperty()
    role: "admin"|"teacher"|"head_teacher"="teacher"
}

export class LoginDto {
    username: string="";
    password: string="";
}