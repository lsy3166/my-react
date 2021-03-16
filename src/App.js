import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route path="/movies">
              <Movies></Movies>
            </Route>
            <Route path="/users">
              <Users></Users>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
