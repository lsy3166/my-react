import Condition from "./components/Condition";
import Count from "./components/Count";
import Movie from "./components/Movie";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const title = "React World!";
  const movies = [];
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/movies">
            {/* {반복문 및 props} */}
            {/* {부모창에 method props로 넘기기} */}
            <Movie movies={movies}></Movie>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
            {/* {Component} */}
            <Count name={title + 1} cl ick="Click First"></Count>
            <Count name={title + 2}></Count>
            <Count name={title + 3} click="Click Third"></Count>
            <hr></hr>
            {/* {조건 랜더링} */}
            <Condition></Condition>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
