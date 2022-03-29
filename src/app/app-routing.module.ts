import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { LogindashComponent } from './logindash/logindash.component';

const routes: Routes = [{path:'login',component:LoginComponent}
,{path:'home',component:HomeComponent},
{path:'',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'admin',component:AdminComponent},
{path:'admindash',component:AdmindashComponent},
{path:'logindash',component:LogindashComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
