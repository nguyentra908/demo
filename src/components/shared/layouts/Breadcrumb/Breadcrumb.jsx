import React, { Component } from 'react';

import './Breadcrumb.css';

export class Breadcrumb extends Component {
  render () {
    return (
      <div className="breadcrumbs d-flex flex-row align-items-center">
        <ul>
          <li><a href="index.html">Trang chủ</a></li>
          <li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Sản phẩm</a></li>
        </ul>
      </div>
    );
  }
}
