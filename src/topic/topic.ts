
export class Options{
    id?: string;
    content: string="";
    is_correct: boolean=false;
}
export class TopicDto{
    subjectId: string="";
    id?: string;
    question: string="";
    type: 'single-choice' | 'multiple-choice' | 'true-false'="single-choice";
    analysis:string="";
    options: Options[]=[];
}

export class QueryTopic{
    page: number=1;
    pageSize: number=10;
    subjectId?: string;
    question?:string;
}