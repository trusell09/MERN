import logo from './logo.svg';
import './App.css';
import RoutingPractice from './components/RoutingPractice';
import {
  BrowserRouter, //this allows routing for the application
  Switch, //tells react which components/elements will show conditionally based on the route
  Route, //specify the route for a component/element
  Link //like an anchor tag but will not reload the entire page
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/home">
        <h1>Welcome</h1>
      </Route>
      <Route exact path="/:id">
        <RoutingPractice/>
      </Route>
      <Route exact path="/:id/:backgroundColor/:color">
        <RoutingPractice/>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
