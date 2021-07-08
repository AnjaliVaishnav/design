import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'form', component:FormComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
