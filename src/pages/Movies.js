import Movie from "../components/Movie";
const Movies = () => {
  const movies = [];
  return (
    // 반복문 및 props
    // 부모창에 method props로 넘기기
    <Movie movies={movies}></Movie>
  );
};

export default Movies;
