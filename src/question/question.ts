
export class SubQuestionDto{
    id?: string;
    content: string="";
    questionId?: string;
    score: number=0;
}


export class QuestionDto{
    id?: string;
    content: string="";
    difficultyId: string=""
    subQuestion: SubQuestionDto[]=[]
    stockId: string=""
}

export class UpdateQuestionDto{
    id: string="";
    content: string="";
    stockId: string=""
    difficultyId: string=""

}

export class QueryQuestionDto{
    page: number=1;
    pageSize: number=10;
    stockId?: string
}
