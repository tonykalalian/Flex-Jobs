import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: "", pathMatch:"full" , redirectTo:"home"},
  {path: "contact", component:ContactComponent},
  {path: "services", component:ServicesComponent},
  {path: "team", component: TeamComponent},
  {path: "home",component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }