
export class SubQuestionDto{
    id?: string;
    content: string="";
    questionId?: string
}


export class QuestionDto{
    id?: string;
    content: string="";
    subQuestion: SubQuestionDto[]=[]
    stockId: string=""
}

export class UpdateQuestionDto{
    id: string="";
    content: string="";
    stockId: string=""
}

export class QueryQuestionDto{
    page: number=1;
    pageSize: number=10;
    stockId?: string
}
