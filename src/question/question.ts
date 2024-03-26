
export class SubQuestionDto{
    id?: string;
    content: string="";
    questionId: string=""
}
export class QuestionDto{
    id?: string;
    content: string="";
    subQuestion: SubQuestionDto[]=[]
    stockId: string=""
}