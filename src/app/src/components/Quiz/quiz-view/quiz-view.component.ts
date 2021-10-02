import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/src/services/quiz.service';
import { Quiz } from 'src/models/quiz';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {

  quiz!:Quiz[];
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getAllQuiz().subscribe((data)=>{
      this.quiz=data;
      console.log(this.quiz);
    });

   
  }
  update(q:Quiz){
      
  }

  add(){
    
  }
  delete(qid:number)
  {

  }

}
