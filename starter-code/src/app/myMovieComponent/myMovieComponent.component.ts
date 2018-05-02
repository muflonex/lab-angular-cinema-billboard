import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../Movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-myMovieComponent",
  templateUrl: "./myMovieComponent.component.html",
  styleUrls: ["./myMovieComponent.component.css"],
  providers: [MoviesService]
})
export class MyMovieComponentComponent implements OnInit {
  movie: Object = {};

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => (this.movie = this.moviesService.getMovie(Number(params["id"])))
    );
  }
}
