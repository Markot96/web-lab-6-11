import './App.css';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Footer from './components/Footer';

import Home from './components/Home';
import React from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
