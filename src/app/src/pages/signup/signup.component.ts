import { Component, OnInit } from '@angular/core';
import {NgModel,FormsModule, NgForm} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userSerive:UserService,private matSnackBar:MatSnackBar) { }

  user!:User;
  ngOnInit(): void {
    this.user=new User({
      'username':'',
      'password':'',
      'firstname':'',
      'lastname':'',
      'mobile':'',
      'emailid':'' 
    });
  }

  formSubmit(){
    
    console.log(this.user);
    this.userSerive.adduser(this.user).subscribe((data)=>{
      this.matSnackBar.open('User got added successfully','',{duration:3000});
    },
    (error)=>{
      this.matSnackBar.open('User already exists','ok');

    })
 
  }

 

}
