import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/logins/login/login.component';
import { SignUpComponent } from './components/logins/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/logins/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
