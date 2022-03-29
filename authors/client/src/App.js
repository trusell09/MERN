import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link  
} from "react-router-dom";

import AllAuthors from './components/AllAuthors';
import AuthorForm from './components/AuthorForm';
import OneAuthorDetail from './components/OneAuthorDetail';
import EditAuthorForm from './components/EditAuthorForm';

function App() {
  
  //create a varaible sent to form, form will filter through variables on each submission
  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
          <h1>Authors</h1>
          <Link to="/" className="btn btn-info m-2">Home</Link>
          <Link to="/new" className="btn btn-primary m-2">Add Author</Link>
          <Switch>
          <Route exact path="/">
          <AllAuthors formSubmitted = {formSubmitted}/>
          </Route>
          <Route exact path="/new"> 
          <AuthorForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}/>
          </Route>
          <Route exact path="/details/:_id">
          <OneAuthorDetail />
          </Route>
          <Route exact path="/edit/:_id">
            <EditAuthorForm />
          </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;