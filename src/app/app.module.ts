import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { ListActivitiesComponent } from './components/activities/list-activities/list-activities.component';
import { DetailsActivityComponent } from './components/activities/details-activity/details-activity.component';
import { InfosPubComponent } from './components/activities/infos-pub/infos-pub.component';
import { InfosSiteComponent } from './components/activities/infos-site/infos-site.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    AboutUsComponent,
    ListActivitiesComponent,
    DetailsActivityComponent,
    InfosPubComponent,
    InfosSiteComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
