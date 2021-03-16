import { useState } from "react";

function MovieForm({ addMovie }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addMovie({ id: Date.now(), title: movieTitle, year: movieYear });
    setMovieTitle("");
    setMovieYear("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="alignItemCenter">
        <input
          type="text"
          placeholder="영화제목"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="개봉년도"
          value={movieYear}
          onChange={(e) => setMovieYear(e.target.value)}
        ></input>
        <button className="button" type="submit">
          영화 추가
        </button>
      </div>
    </form>
  );
}

export default MovieForm;
