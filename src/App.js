import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import Splash from './components/Splash/Splash'
import Invoice from './components/Invoice/Invoice.js';
import SingleLot from './components/SingleLot/SingleLot';
import Login from './components/Login/Login';
import AllLots from './components/AllLots/AllLots';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Switch>
        {/* <Route path="/battle" component={ComponentNameHERE} /> */}
        <Route path="/Invoice" component={Invoice} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path='/lot' component={SingleLot} />
        <Route path='/All' component={AllLots} />
        <Route path='/' component={Splash} />
      </Switch>
      </div>
    );
  }
}

export default App;
