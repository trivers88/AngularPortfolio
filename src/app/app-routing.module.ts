import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AppsComponent } from "./apps/apps.component";
import { CirclesComponent } from "./apps/circles/circles.component";
import { ColorGuesserComponent } from "./apps/color-guesser/color-guesser.component";
import { TodoListComponent } from "./apps/todo-list/todo-list.component";
import { DogsComponent } from "./dogs/dogs.component";
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./landing/landing.component";

const appRoutes: Routes = [
  { path: "", component: LandingComponent },
  {
    path: "home",
    component: HomeComponent,
    data: { animation: "HomeComponent" },
  },
  { path: "dogs", component: DogsComponent, data: { animation: "Dogs" } },
  {
    path: "apps",
    component: AppsComponent,
    data: { animation: "AppsComponent" },
  },
  { path: "circles", component: CirclesComponent },
  { path: "todo", component: TodoListComponent },
  { path: "colorguesser", component: ColorGuesserComponent },
  {
    path: "aboutme",
    component: AboutMeComponent,
    data: { animation: "AboutMeComponent" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
