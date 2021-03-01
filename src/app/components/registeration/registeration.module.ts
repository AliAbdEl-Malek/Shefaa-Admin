import { SharedModule } from './../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';


const routes :Routes = [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetPassword', component:ForgetPasswordComponent},
  {path:'resetPassword', component:ResetPasswordComponent},
  {path:'logout', component:LogoutComponent},

];


@NgModule({
  declarations: [SignupComponent, LoginComponent, ForgetPasswordComponent, ResetPasswordComponent, LogoutComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,SharedModule
  ]
})
export class RegisterationModule { }
