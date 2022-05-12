import './MovieList.css'

function MovieList() {
    //Dummy values
    const movies = [{
        id: 1,
        title: "Dune",
        rating: 5
    },
    {
        id: 2,
        title: "Tenet",
        rating: 5
    }];

    // The delete img element always has the key 1, the stars have the key 2-6 depending on how many there are
    const listItems = movies.map((movie) =>
        <li key={movie.id} data-grade={movie.rating} data-title={movie.title}>
            {movie.title}
            <img key={1} src="images/delete.png" alt="Delete movie" className="delete-movie-icon"></img>
            {Array.from({length: movie.rating}, (_, index) => <img key={index+1} src="images/star.png" alt="Star"></img>)}
        </li>
    );

    return (
        <ul id="movies">{listItems}</ul>
    );
}

export default MovieList;