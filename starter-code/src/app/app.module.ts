import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './myHomeComponent/myHomeComponent.component';
import { MyMovieComponentComponent } from './myMovieComponent/myMovieComponent.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
