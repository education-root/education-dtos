
export class KeyWordDto{
    id?: string;
    content: string="";
    questionId?: string;
}
export class SubQuestionDto{
    id?: string;
    content: string="";
    questionId?: string;
    score: number=0;
    keywords: KeyWordDto[] = []
}


export class QuestionDto{
    id?: string;
    content: string="";
    difficultyId: string=""
    subQuestion: SubQuestionDto[]=[]
    stockId: string=""
    type: number=1 //1-论述题 ，2-法律文书题， 3-案例分析题
}

export class UpdateQuestionDto{
    id: string="";
    content: string="";
    stockId: string=""
    difficultyId: string=""
    type: number=1 //1-论述题 ，2-法律文书题， 3-案例分析题

}

export class QueryQuestionDto{
    page: number=1;
    pageSize: number=10;
    stockId?: string
    content?: string;
}

export class answer{
    subQuestionId: string="";
    answer: string="";
}
export class SubmitQuestionDto{
    name?: string;
    historyId?: string;
    classroomId?: string="";
    questionId: string="";
    list:answer[] = []
}

export class TeacherQueryHistoryDto{
    page: number=1;
    pageSize: number=10
    classId: string=""
}

export class GradingDto{
    subQuestionHistoryId: string="";
    comment: string="";
    score: number=0;
}
