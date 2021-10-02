import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private loginService: LoginService, private route: Router) { }

  loginData = {
    username: '', password: ''
  };

  ngOnInit(): void {
  }


  login() {
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snackBar.open("Username is required", 'ok');
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snackBar.open("Password is required", 'ok');
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe((data: any) => {
      console.log('I have received token:' + data.token);
     // this.loginService.storeTokenToLocalStore(data.token);
     localStorage.setItem('token', data.token);
      
      this.loginService.getCurrentUser().subscribe((data: any) => {
        this.loginService.setUser(data);
        console.log('getCurrentUser()' +data);
        this.loginService.setUser(data);
       
       // console.log('what is the role'+this.loginService.getUserRole());
       if (this.loginService.getUserRole() == 'Normal') {
        this.route.navigate(['userdash']);
      }
      else {
        this.route.navigate(['admindash/admin/admindash']);
      }
      
      })
     
     

    },
      (error) => {
        console.log(error);

      });



  }
}
