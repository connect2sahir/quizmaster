import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {NgForm} from '@angular/forms'
import { User } from 'src/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  initial_btn:string='Edit';
  user!:User;

  constructor(public loginService:LoginService,private userService:UserService) { }

  ngOnInit(): void {
    
      this.user=this.loginService.getUser();
     
    }

  editClick(){
    if(this.initial_btn=='Edit'){
      this.initial_btn='Save'
    }
    else{
      this.userService.updated(this.user).subscribe((data)=>{
          console.log(data);
      })
    }
  }

}
