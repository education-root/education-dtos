import {QueryConditionDto} from "../admin/admin";


export class UnitDto{
    chapterId: string=""
    id?: string;
    name: string=""
}

export class ChapterDto{
    subjectId: string=""
    id?: string
    name: string=""
    units?: UnitDto[]
}

export class SubjectDto{
    id?: string
    name?: string=""
    chapters?: ChapterDto[]
}

export class QuerySubjectDto{
    page: number=1;
    size: number=10;
    name?: string;
}

export class QueryChapterDto{
    page: number=1;
    size: number=10;
    subjectId: string="";
    name?: string;
}

export class QueryUnitDto{
    page: number=1;
    size: number=10;
    chapterId: string="";
    name?: string;
}