import { Category } from "./category";

export class Quiz {
    quid!:number;
    title!:string;
    description!:string;
    maxMarks!:string;
    numberOfQuestions!:string;
    active!:boolean;
    category!:Category;
}
