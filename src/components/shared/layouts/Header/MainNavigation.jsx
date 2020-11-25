import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./MainNavigation.css";

class MainNavigation extends Component {
  render() {
    return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <Link to="/">
                  Tea
                  <span>Shop</span>
                </Link>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/categories">Sản Phẩm</Link>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>

                  <li>
                    <Link to="/Contact">Liên hệ</Link>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li className="checkout">
                    <Link to="/cart">
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                      <span className="checkout_items">
                        {this.props.cartTotal}
                      </span>
                    </Link>
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

export default withRouter(connect(mapStateToProps)(MainNavigation));
