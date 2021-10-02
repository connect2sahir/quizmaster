import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz';

@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.css']
})
export class QuizAddComponent implements OnInit {

  quiz: Quiz = new Quiz;
  constructor() { }

  ngOnInit(): void {
  }

}
