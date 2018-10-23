import React, { Component } from 'react';

import './Descriptions.css';

export default class Descriptions extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="tab_container active">
        <div className="row">
          <div className="col-lg-5 desc_col">
            <div className="tab_title">
              <h4>Description</h4>
            </div>
            <div className="tab_text_block">
              <h2>Pocket cotton sweatshirt</h2>
              <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
            </div>
            <div className="tab_image">
              <img src="/assets/images/desc_1.jpg" alt="" />
            </div>
            <div className="tab_text_block">
              <h2>Pocket cotton sweatshirt</h2>
              <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 desc_col">
            <div className="tab_image">
              <img src="/assets/images/desc_2.jpg" alt="" />
            </div>
            <div className="tab_text_block">
              <h2>Pocket cotton sweatshirt</h2>
              <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
            </div>
            <div className="tab_image desc_last">
              <img src="/assets/images/desc_3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}