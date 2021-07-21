import React, { Component } from "react";
import "./TopNavigation.css";
import history from '../../../../history';
export default class TopNavigation extends Component {
  onLogin(url) {
    window.scrollTo(0, 0)
    history.push(url);
  }
  render() {
    return (
      <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">

                Free shipping for invoices over 100.000 vnđ
              </div>
            </div>
            <div className="col-md-6 login-container">
              <div className="sign-in" onClick={() => this.onLogin('/login')}> Sign In </div>
              <div className="sign-up" onClick={() => this.onLogin('/register')}> Sign Up </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
