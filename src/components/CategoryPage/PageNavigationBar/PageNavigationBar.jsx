import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PageNavigationBar.css';

export default class PageNavigationBar extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div className="pages d-flex flex-row align-items-center">
        <div className="page_current">
          <span>1</span>
          <ul className="page_selection">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </div>
        <div className="page_total"><span>of</span> 3</div>
        <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
      </div>
    );
  }
}