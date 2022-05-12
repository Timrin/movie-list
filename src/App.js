import MovieInputForm from "./components/MovieInputForm";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieInputForm />
      <MovieList />
    </div>
  );
}

export default App;
