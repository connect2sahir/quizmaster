import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './src/components/Categories/add-category/add-category.component';
import { ViewCategoryComponent } from './src/components/Categories/view-category/view-category.component';
import { QuizAddComponent } from './src/components/Quiz/quiz-add/quiz-add.component';
import { QuizViewComponent } from './src/components/Quiz/quiz-view/quiz-view.component';
 import { AdmindashComponent } from './src/pages/admin/admindash/admindash.component';
import { AdminwelcomeComponent } from './src/pages/admin/adminwelcome/adminwelcome.component';
import { HomeComponent } from './src/pages/home/home.component';
import { LoginComponent } from './src/pages/login/login.component';
import { LogoutComponent } from './src/pages/logout/logout.component';
import { UserdashComponent } from './src/pages/normal/userdash/userdash.component';
import { PnfoundComponent } from './src/pages/pnfound/pnfound.component';
import { ProfileComponent } from './src/pages/profile/profile.component';
import { SignupComponent } from './src/pages/signup/signup.component';
import { AuthGuardService } from './src/services/auth-guard.service';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'signup',component:SignupComponent,pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'admindash',component:AdmindashComponent,canActivate:[AuthGuardService],
   children:[
        {path:'admin/profile',component:ProfileComponent},
        {path:'admin/admindash',component:AdminwelcomeComponent},
        {path:'admin/viewcategories',component:ViewCategoryComponent},
        {path:'admin/addcategory',component:AddCategoryComponent,pathMatch:"full"},
        {path:'admin/addcategory/:id',component:AddCategoryComponent,pathMatch:"full"},
        {path:'admin/viewquiz',component:QuizViewComponent},
        {path:'admin/addquiz',component:QuizAddComponent},
        {path:'admin/addquiz/:id',component:QuizAddComponent}

        ]},
  {path:'userdash',component:UserdashComponent,canActivate:[AuthGuardService]},
  {path:"logout",component:LogoutComponent},
  {path:"**",component:PnfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
