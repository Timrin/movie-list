import React from 'react';
import MovieInputForm from "./components/MovieInputForm";
import MovieList from "./components/MovieList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.state = {
      movies: []
    };
  }

  addMovie(title, rating) {
    let movies = this.state.movies;
    console.log(this.state.movies)
    //Id of the added movie is 1 if there are no movies. Otherwise the id is the id of the last movie plus 1
    let id = movies.length == 0 ? 1 : (this.state.movies[this.state.movies.length-1].id) + 1; 

    movies.push({
      id: id,
      title: title,
      rating: parseInt(rating)
    })

    this.setState({movies: movies})
    console.log(this.state.movies)
  }

  removeMovie(id) {
  }

  render() {
    const movies = this.state.movies;
    return (
      <div className="App">
        <h1>Movie List</h1>
        <MovieInputForm onAddMovie={this.addMovie}/>
        <MovieList movies={movies}/>
      </div>
    );
  }
}
