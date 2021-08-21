import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//pages 

import Home from './home';
import Register from './register';
//App 

function App() {
  return (
    <div className="">
    <Router>
    <Switch>
    <Route path="/register" component={Register} />
    <Route path="/" component={Home} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
