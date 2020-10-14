import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

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
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,

    HomeComponent,
    DogsComponent,
    AppsComponent,
    AboutMeComponent,
    LandingComponent,
    CirclesComponent,
    TodoListComponent,
    ColorGuesserComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
