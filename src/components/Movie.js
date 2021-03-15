import { useState } from "react";
import MovieForm from "./MovieForm";

function Movie(props) {
  const [movies, setMovies] = useState(props.movies);

  const renderMovie = movies.map((movie) => {
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  return (
    <div>
      <h1>Movie List</h1>
      {/* 부모창에 addMovie함수 넘기기 */}
      <MovieForm addMovie={addMovie}></MovieForm>
      {/* 반복문 */}
      {renderMovie}
    </div>
  );
}

export default Movie;
