import { useState } from "react";
import ErrorDiv from "./ErrorDiv";

function MovieForm({ addMovie }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorYear, setErrorYear] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };
  const resetErrorForm = () => {
    setErrorTitle("");
    setErrorYear("");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    resetErrorForm();
    if (movieTitle && movieYear) {
      addMovie({ id: Date.now(), title: movieTitle, year: movieYear });
      resetForm();
    } else {
      if (!movieTitle) {
        setErrorTitle("영화 제목을 입력해 주세요!");
      }
      if (!movieYear) {
        setErrorYear("개봉 년도를 입력해 주세요!");
      }
    }
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
      {/* 조건부 랜더링 */}
      <ErrorDiv errorTitle={errorTitle} errorYear={errorYear}></ErrorDiv>
    </form>
  );
}

export default MovieForm;
