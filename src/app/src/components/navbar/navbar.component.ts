import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean=false;
  user!:User;
  constructor(public loginService: LoginService) {
    
   }
   
   ngOnInit(): void {
    
    this.loginService.loginStatusSubject.asObservable().subscribe((data)=>{
      console.log("loginStatusSubject-"+data);
      this.isLoggedIn=this.loginService.isUseisLoggedIn();
      this.user=this.loginService.getUser();
      console.log("isLoggedIn-"+this.isLoggedIn)
      console.log("user-"+this.loginService.getUser())

    })
   
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn=false;
    
  }

}
