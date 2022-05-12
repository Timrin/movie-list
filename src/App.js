import React from 'react';
import MovieInputForm from "./components/MovieInputForm";
import MovieList from "./components/MovieList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{
        id: 1,
        title: "Dune",
        rating: 5
      },
      {
        id: 2,
        title: "Tenet",
        rating: 5
      }]
    };
  }

  render() {
    const movies = this.state.movies;
    return (
      <div className="App">
        <h1>Movie List</h1>
        <MovieInputForm />
        <MovieList movies={movies}/>
      </div>
    );
  }
}
