import React, { Component } from "react";
import './Footer1.css';
export default class Footer1 extends Component {
  render() {
    return (
      <div className="footer1_container ">
        <div className="container footer_nav_container">
          <div className="row">
          <div className="col-md-3">
                <h6>Contact Information</h6>
                <ul>
                  <li> <a >✵</a> Ktx khu B ĐH Quốc Gia TP HCM</li>
                  <li><a>✵</a> Phone: 0326837276</li>
                  <li><a >✵</a> EMAIL: Teashop@gmail.com</li>
                  <li className="icon-social"><i className="fa fa-facebook" aria-hidden="true"></i> 
                    <i className="fa fa-instagram" aria-hidden="true"></i> 
                  <i className="fa fa-skype" aria-hidden="true"></i>
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h6>Terms</h6>
                <ul>
                  <li> <a >✵</a> Website Terms</li>
                  <li><a>✵</a> Concesstion Terms</li>
                  <li><a >✵</a> Payment Terms</li>
                  <li><a >✵</a> Incentive Terms</li>
                </ul>
            </div>
            <div className="col-md-3">
            <h6>Policy</h6>
                <ul>
                  <li><a >✵</a> Delivery Policy</li>
                  <li><a >✵</a> Purchase Policy </li>
                  <li><a >✵</a> Change Policy</li>
                  <li><a >✵</a> Protection Policy</li>
                </ul>
            </div>
            <div className="col-md-3">
            <h6>Certifies</h6>
                <ul>
                  <li><img src="//bizweb.dktcdn.net/100/287/440/themes/775848/assets/fot_chung_nhan2.png?1606833901738"></img></li>
                </ul>
            </div>
          
          </div>

        </div>
      </div>


    );
  }
}


