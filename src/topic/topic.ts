
export class Options{
    id?: string;
    content: string="";
    is_correct: boolean=false;
}
export class TopicDto{
    id?: string;
    question: string="";
    type: 'single-choice' | 'multiple-choice' | 'true-false'="single-choice";
    analysis:string="";
    options: Options[]=[];
}