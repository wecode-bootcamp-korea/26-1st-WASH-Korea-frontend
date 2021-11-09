import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ScrollToTop from './pages/ScrollToTop';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductDetailsTemplate from './pages/ProductDetail/ProductDetailsTemplate';
import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';

class Routes extends Component {
  render() {
    return (
      <Router>
        {/* <ScrollToTop> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={ProductDetailsTemplate} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/productDetails/:id"
            component={ProductDetailsTemplate}
          />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
        {/* </ScrollToTop> */}
      </Router>
    );
  }
}

export default Routes;
