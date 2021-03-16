import { useState } from "react";
import MovieForm from "./MovieForm";

function Movie(props) {
  const [movies, setMovies] = useState(props.movies);

  const deleteMovie = (movieId) => {
    // const index = movies.findIndex((fmovie) => fmovie.id === movieId);
    // let deletedMovies = movies.splice(index, 1);

    const deletedMovies = movies.filter((fmovie) => fmovie.id !== movieId);
    setMovies(deletedMovies);
  };

  const renderMovie = movies.length
    ? movies.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <div className="movie-title">
              {movie.title}
              <span className="movie-year"> ({movie.year})</span>
            </div>
            <div>
              <button
                className="alert"
                // 함수에 인자 전달하기
                onClick={deleteMovie.bind(null, movie.id)}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })
    : "추가된 영화가 없습니다.";

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
