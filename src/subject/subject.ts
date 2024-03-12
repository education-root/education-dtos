



export class UnitDto{
    id?: string;
    name: string=""
}

export class ChapterDto{
    id?: string
    name: string=""
    units?: UnitDto[]
}

export class SubjectDto{
    id?: string
    name?: string=""
    chapters?: ChapterDto[]
}