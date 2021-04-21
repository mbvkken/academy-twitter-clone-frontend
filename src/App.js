import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
// import Authenticate from './components/Authenticate'; 

function App() {
  return (
    <HashRouter>
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
    </HashRouter>
  );
}

export default App;
