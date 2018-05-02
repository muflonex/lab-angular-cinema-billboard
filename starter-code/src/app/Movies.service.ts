import { Injectable } from "@angular/core";
import { moviesList } from '../sample-movies';

export interface Moviesinterface {
  id: Number;
  title: String;
  poster: String;
  synopsis: String;
  genres: Array<string>;
  year: Number;
  director: String;
  actors: Array<string>;
  hours: Array<string>;
  room: Number;
}

@Injectable()
export class MoviesService {
  movies: Array<Moviesinterface>

  constructor( ) { this.movies = moviesList;}

  getMovies(){
    return this.movies
  }
  getMovie(id){
    return this.movies.find(movie => movie.id === id);
  }
}

