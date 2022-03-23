import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, //this allows routing for the application
  Switch, //tells react which components/elements will show conditionally based on the route
  Route, //specify the route for a component/element
  Link //like an anchor tag but will not reload the entire page
} from "react-router-dom";

import Profile from './components/Profile';
import People from './components/People';

function App() {
  return (
    <BrowserRouter>
    <div className="App mt-3">
        <Link to="/">Home</Link> || <Link to="/profile">View My Profile</Link>
        <Switch>
        <Route exact path="/">
          <p>This is the Home Page</p>
        </Route>
        <Route exact path="/profile">
          <Profile></Profile>
        </Route>
        <Route exact path= "/people/:id"> 
          <People></People>
        </Route>
        <Route exact path= "/people/:id/:borderColor"> 
          <People></People>
        </Route>

        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
