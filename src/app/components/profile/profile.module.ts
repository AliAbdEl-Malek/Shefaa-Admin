import { MaxLengthPipe } from './../../pipes/max-length.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { AuthGuard } from './../../auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes =[
  {path:"edit",component:UpdateProfileComponent, canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [UpdateProfileComponent,MaxLengthPipe],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,FormsModule,ReactiveFormsModule
  ]
  
})
export class ProfileModule { }
