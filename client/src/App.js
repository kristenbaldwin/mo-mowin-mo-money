import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import { Route, Switch, Redirect } from 'react-router-dom';
import Invoice from './components/Invoice/Invoice.js';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Switch>
        {/* <Route path="/battle" component={ComponentNameHERE} /> */}
        <Route path="/Invoice" component={Invoice} />
      </Switch>
      </div>
    );
  }
}

export default App;
