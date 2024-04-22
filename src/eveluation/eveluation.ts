export class SingleTask{
    id?: string;
    content: string=""
}
export class AddTasksAlbumDto{
    tasks: SingleTask[] =[];
    date: string="";
    studentId: string = "";
}