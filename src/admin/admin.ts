
export interface AdminInfoDto {
    id?: string;
    username: string;
    password: string;
    phone: string;
    role: "admin"|"teacher"|"head_teacher"
}

export interface LoginDto {
    username: string;
    password: string;
}