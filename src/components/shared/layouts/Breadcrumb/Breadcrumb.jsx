import React, { Component } from 'react';

import './Breadcrumb.css';

import history from '../../../../history';
export class Breadcrumb extends Component {
  onRouteChanged = (url) => {
    window.scrollTo(0, 0)
    history.push(url);
  }
  render () {
   
    return (
      <div className="breadcrumbs d-flex flex-row align-items-center" >
        <ul>
          <li><a onClick={() => { this.onRouteChanged('/') }} >Home</a></li>
          <li className="active"><a onClick={() => { this.onRouteChanged('/categories') }}  ><i className="fa fa-angle-right" aria-hidden="true"></i>Products</a></li>

  
        </ul>
      </div>
    );
  }
}
