import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Chekout/Checkout';
import Orders from './containers/Orders/Orders';




class App extends Component {
  render () {
    return (
      //load main components
      <div>
        <Layout>
          <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders"  component={Orders} />
          <Route path="/" excat component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
