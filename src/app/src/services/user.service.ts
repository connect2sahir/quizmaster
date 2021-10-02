import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import baseURL from './Helper';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public adduser(user:User){

    
      return this.http.post(`${baseURL}user/add`,user);

  }

  public updated(user:User){
  
   console.log( `${baseURL}user/update`)
    return this.http.put(`${baseURL}user/update`,user);
  }
}
