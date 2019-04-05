import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { AppsComponent } from './apps/apps.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ThingsComponent } from './things/things.component';
import { LandingComponent } from './landing/landing.component';
import { CirclesComponent } from './things/circles/circles.component';
import { TodoListComponent } from './things/todo-list/todo-list.component';
import { ColorGuesserComponent } from './things/color-guesser/color-guesser.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'home', component: HomeComponent },
  {path: 'dogs', component: DogsComponent },
  {path: 'apps', component: AppsComponent },
  {path: 'aboutme', component: AboutMeComponent },
  {path: 'things', component: ThingsComponent, children: [
    {path: 'circles', component: CirclesComponent },
    {path: 'todo', component: TodoListComponent },
    {path: 'colorguesser', component: ColorGuesserComponent }
    ] }
  ];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    DogsComponent,
    AppsComponent,
    AboutMeComponent,
    ThingsComponent,
    LandingComponent,
    CirclesComponent,
    TodoListComponent,
    ColorGuesserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
