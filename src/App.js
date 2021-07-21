import React, { Component } from 'react';
import { Footer } from './components/shared';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import CategoryPage from './containers/CategoryPage/CategoryPage';
import CartPage from './containers/CartPage/CartPage';
import FormLogin from './components/Form/FomLogin';
import FormRegister from './components/Form/FormRegister';
import ProductPage from "./containers/ProductPage/ProductPage";
import { Router, Route, Switch } from 'react-router-dom';
import TopNavigation from './components/shared/layouts/Header/TopNavigation';
import MainNavigation from './components/shared/layouts/Header/MainNavigation';
import history from './history';
import Order from './components/CartPage/Order/Order';
import Contact from './components/HomePage/Contact/Contact';
import Blog from './components/Blog/Blog';
import {FormikRegister} from './components/Form/FormikRegister';
import { FormikLogin } from './components/Form/FormikLogin';
import BlogDetail from './components/Blog/BlogDetail';
class App extends Component {
  render() {
    return (
      <div >
        <header className="header trans_300">
          <TopNavigation />
          <MainNavigation />
        </header>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/categories" component={CategoryPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/order" component={Order}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/blog-detail/:id" component={BlogDetail} />
            <Route path="/register" component={FormikRegister}/>
            <Route path="/login" component={FormikLogin}/>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
