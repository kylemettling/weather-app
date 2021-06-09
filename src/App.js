import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/home";

function App() {
  document.title = "Weather App";
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
