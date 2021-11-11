import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/productdetail/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
