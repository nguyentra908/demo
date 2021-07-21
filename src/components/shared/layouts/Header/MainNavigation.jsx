import React, { Component } from "react";
import { connect } from "react-redux";

import "./MainNavigation.css";
import history from '../../../../history';

class MainNavigation extends Component {
  onRouteChanged = (url) => {
    window.scrollTo(0, 0)
    history.push(url);
  }

  render() {
    return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <a onClick={() => { this.onRouteChanged('/') }} >Tea
                  <span>Shop</span></a>
               
              </div>



              <nav className="navbar">
                <ul className="navbar_menu">
                  <li><span onClick={() => { this.onRouteChanged('/') }}>Home</span></li>
                  <li><span onClick={() => { this.onRouteChanged('/categories') }}>Products</span></li>
                  <li><span onClick={() => { this.onRouteChanged('/blog') }}>Blog</span></li>
                  <li><span onClick={() => { this.onRouteChanged('/contact') }}>Contact</span></li>
                </ul>
                <ul className="navbar_user">
                  <li className="checkout">
                    <a onClick={() => { this.onRouteChanged('/cart') }}>
                      <i className="fa fa-shopping-cart " aria-hidden="true"></i>
                      
                      <span className="checkout_items">
                        {this.props.cartTotal}
                      </span>
                      </a>
                  </li>
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartTotal: state.cart.total
});

export default connect(mapStateToProps)(MainNavigation);
