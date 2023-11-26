import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { ListActivitiesComponent } from './components/activities/list-activities/list-activities.component';
import { InfosSiteComponent } from './components/activities/infos-site/infos-site.component';
import { DetailsActivityComponent } from './components/activities/details-activity/details-activity.component';
import { ResearchActivityComponent } from './components/activities/research-activity/research-activity.component';
import { InfosPubComponent } from './components/activities/infos-pub/infos-pub.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"list-activities",component:ListActivitiesComponent},
  {path:"list-activities/:id", component:DetailsActivityComponent },
  {path:"research-activity", component: ResearchActivityComponent },
  {path:"infos-pub", component: InfosPubComponent },
  {path:"infos-site", component: InfosSiteComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


