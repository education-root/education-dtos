
export class OptionDto{
    id?: string;
    content: string="";
    is_correct: boolean=false;
    topicId?: string
}
export class TopicDto{
    unitId: string="";
    id?: string;
    question: string="";
    type: 'single-choice' | 'multiple-choice' | 'true-false'="single-choice";
    analysis:string="";
    options: OptionDto[]=[];
}

export class QueryTopicDto{
    page: number=1;
    pageSize: number=10;
    unitId?: string;
    question?:string;
}