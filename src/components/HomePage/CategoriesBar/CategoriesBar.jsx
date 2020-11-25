import React, {Component} from 'react';

import './CategoriesBar.css';

export default class CategoriesBar extends Component {
  render () {
    return (
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner_item align-items-center" id="women">
                <div className="banner_category">
                  <a href="#">women's</a>
                </div>
              </div>
            </div>        
            <div className="col-md-6">
              <div className="banner_item align-items-center" id="men">
                <div className="banner_category">
                  <a href="#">men's</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
