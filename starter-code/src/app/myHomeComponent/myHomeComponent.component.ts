import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../Movies.service";

@Component({
  selector: "app-myHomeComponent",
  templateUrl: "./myHomeComponent.component.html",
  styleUrls: ["./myHomeComponent.component.css"],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {
  movies : Array<Object>

  constructor(private moviesService: MoviesService) {}
  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }
}
