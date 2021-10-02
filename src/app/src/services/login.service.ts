import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/models/user';
import baseURL from './Helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public loginStatusSubject=new Subject<boolean>();

  constructor(private http: HttpClient) { }

  generateToken(loginData: any) {
    return this.http.post(`${baseURL}generate-token`, loginData);

  }



  public storeTokenToLocalStore(token: any) {
    localStorage.setItem('token', token);
    console.log('storeTokenToLocalStore()' + localStorage.getItem('token'));
    
  //  this.getCurrentUser();
    return true;
  }

  public isUseisLoggedIn(): boolean {
    let token = localStorage.getItem('token');
   //console.log('token here'+token);
    if (token == undefined || token == '' || token == null) {
      return false;
    }
    else {
      return true;
    }
  }


  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    

    return true;
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  public setUser(user: User) {
    console.log('setUser():' + user);
    localStorage.setItem('user', JSON.stringify(user));
    this.loginStatusSubject.next(true);
    return true;
  }

  public getUser(): any {
       let user = localStorage.getItem('user');
    console.log('getUser():' + user);
    if (user == undefined || user == null || user == '') {
      this.logout();
      return null;
    } else {
      return JSON.parse(user);
    }
  }


  public getUserRole(): any {
    let user = this.getUser();
    console.log('getUserRole()'+user.authorities[0].authority);
    return user.authorities[0].authority;
  }

  public getCurrentUser() {

   return  this.http.get(`${baseURL}current-user`);
  }





  
}
