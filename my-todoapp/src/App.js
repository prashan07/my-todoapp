import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Register';

function App(){ 
  return (
    <div className="App">
      {/* <h1>Welcome to the Login Page</h1> */}
      <Router>
        <Switch>
          <Route path="/">
            <HomePage/>
          </Route>
          {/* <Route path="/">
            <Register />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
