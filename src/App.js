import Condition from "./components/Condition";
import Count from "./components/Count";
import Movie from "./components/Movie";
import "./App.css";

function App() {
  const title = "React World!";
  const movies = [
    { title: "Star Wars1", year: "1979" },
    { title: "Star Wars2", year: "1980" },
    { title: "Star Wars3", year: "1981" },
  ];
  return (
    <div className="App">
      {/* {Component} */}
      <Count name={title + 1} cl ick="Click First"></Count>
      <Count name={title + 2}></Count>
      <Count name={title + 3} click="Click Third"></Count>
      <hr></hr>
      {/* {조건 랜더링} */}
      <Condition></Condition>
      <hr></hr>
      {/* {반복문 및 props} */}
      {/* {부모창에 method props로 넘기기} */}
      <Movie movies={movies}></Movie>
    </div>
  );
}

export default App;
