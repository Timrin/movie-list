import React from 'react';
import MovieInputForm from "./components/MovieInputForm";
import MovieList from "./components/MovieList";
import './index.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.sortByAlphabetical = this.sortByAlphabetical.bind(this);
    this.state = {
      movies: []
    };
  }

  addMovie(title, rating) {
    let movies = this.state.movies;
    console.log(this.state.movies)
    //Id of the added movie is 1 if there are no movies. Otherwise the id is the id of the last movie plus 1
    let id = movies.length == 0 ? 1 : (movies[movies.length - 1].id) + 1;

    movies.push({
      id: id,
      title: title,
      rating: parseInt(rating)
    })

    this.setState({ movies: movies })
    console.log(this.state.movies)
  }

  removeMovie(id) {
    console.log(id);
    console.log(this.state.movies);
    this.setState({ movies: this.state.movies.filter(movie => movie.id != id) });
    console.log(this.state.movies);
  }

  sortByRating() {
    let movies = this.state.movies;

    movies.sort((a, b) => {
      if (a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
      return 0;
    })

    this.setState({ movies: movies })
  }

  sortByAlphabetical() {
    let movies = this.state.movies;

    movies.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    })

    this.setState({ movies: movies })
  }

  render() {
    const movies = this.state.movies;
    return (
      <div className="App">
        <h1>Movie List</h1>
        <MovieInputForm onAddMovie={this.addMovie} />
        <h2>Tillagda filmer</h2>
        <MovieList
          movies={movies}
          onRemoveMovie={this.removeMovie} />
        <button onClick={this.sortByRating} className="btn btn-dark">Betygsordning</button>
        <button onClick={this.sortByAlphabetical} className="btn btn-dark">Alfabetisk ordning</button>
      </div>
    );
  }
}
