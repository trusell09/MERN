import logo from './logo.svg';
import './App.css';
import LukeSkywalkerAPI from './components/LukeSkywalkerAPI';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App container col-2">
      <Switch>
        <Route exact path = "/">
          <LukeSkywalkerAPI/>
        </Route>
        <Route exact path = "/:obj/:num">
          <LukeSkywalkerAPI/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
