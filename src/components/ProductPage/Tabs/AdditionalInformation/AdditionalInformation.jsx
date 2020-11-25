import React, { Component } from "react";

import "./AdditionalInformation.css";

export default class AdditionalInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tab_container active">
        <div className="row">
          <div className="col additional_info_col">
            <div className="tab_title additional_info_title">
              <h4>Thông tin</h4>
            </div>
            <p>
              COLOR:
              <span>Gold, Red</span>
            </p>
            <p>
              SIZE:
              <span>L,M,XL</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
