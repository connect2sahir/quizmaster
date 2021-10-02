import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './src/components/navbar/navbar.component';
import { SignupComponent } from './src/pages/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserService } from './src/services/user.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './src/pages/login/login.component';
import { HomeComponent } from './src/pages/home/home.component';
import { PnfoundComponent } from './src/pages/pnfound/pnfound.component';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
 import { HttpInterceptorService } from './src/services/http-interceptor.service';
import { AdmindashComponent } from './src/pages/admin/admindash/admindash.component';
import { UserdashComponent } from './src/pages/normal/userdash/userdash.component';
import { LogoutComponent } from './src/pages/logout/logout.component';
import { ProfileComponent } from './src/pages/profile/profile.component';
import { SidebarComponent } from './src/pages/admin/sidebar/sidebar.component';
 import{MatListModule} from '@angular/material/list';
import { AdminwelcomeComponent } from './src/pages/admin/adminwelcome/adminwelcome.component';
import { ViewCategoryComponent } from './src/components/Categories/view-category/view-category.component';
import { AddCategoryComponent } from './src/components/Categories/add-category/add-category.component';
import { QuizViewComponent } from './src/components/Quiz/quiz-view/quiz-view.component';
import { QuizAddComponent } from './src/components/Quiz/quiz-add/quiz-add.component';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PnfoundComponent,
    AdmindashComponent,
    UserdashComponent,
    LogoutComponent,
    ProfileComponent,
    SidebarComponent,
    AdminwelcomeComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    QuizViewComponent,
    QuizAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
