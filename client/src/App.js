import './App.css';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Reserved from './components/Reserved';
import Footer from './components/Footer';
import Item from './components/Item';
import Checkout from './components/Checkout'
import Success from './components/Success'

import Home from './components/Home';
import store from './utils/Store.js'
import React from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'



function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route path="/catalog/:id">
              <Item />
            </Route>
            <Route path="/reserved">
              <Reserved />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
    
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
