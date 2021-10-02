import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/models/quiz';
import baseURL from './Helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  getAllQuiz():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(`${baseURL}quiz/getallquiz`);
  }
}
