import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link 
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import OneProductDetail from './components/OneProductDetail';
import EditProductForm from './components/EditProductForm';

function App() {
  
  //create a varaible sent to form, form will filter through variables on each submission
  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
          <h1>Products</h1>
          <Link to="/" className="btn btn-info">Home</Link>
          <Switch>
          <Route exact path="/">
          <ProductForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}/>
          <hr />
          <AllProducts formSubmitted = {formSubmitted}/>
          </Route>
          <Route exact path="/details/:_id">
          <OneProductDetail />
          </Route>
          <Route exact path="/edit/:_id">
            <EditProductForm />
          </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
