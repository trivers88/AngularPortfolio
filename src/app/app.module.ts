import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { HomeComponent } from "./home/home.component";
import { DogsComponent } from "./dogs/dogs.component";
import { AppsComponent } from "./apps/apps.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { LandingComponent } from "./landing/landing.component";
import { CirclesComponent } from "./apps/circles/circles.component";
import { TodoListComponent } from "./apps/todo-list/todo-list.component";
import { ColorGuesserComponent } from "./apps/color-guesser/color-guesser.component";

const appRoutes: Routes = [
  { path: "", component: LandingComponent },
  { path: "home", component: HomeComponent },
  { path: "dogs", component: DogsComponent },
  { path: "apps", component: AppsComponent },
  { path: "circles", component: CirclesComponent },
  { path: "todo", component: TodoListComponent },
  { path: "colorguesser", component: ColorGuesserComponent },
  { path: "aboutme", component: AboutMeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    BrowserAnimationsModule,
    HomeComponent,
    DogsComponent,
    AppsComponent,
    AboutMeComponent,
    LandingComponent,
    CirclesComponent,
    TodoListComponent,
    ColorGuesserComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
