import React, {Component} from 'react';

import './Deals.css';

export default class Deals extends Component {
  render () {
    return (
      <div className="deal_ofthe_week">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deal_ofthe_week_img">
                <img src="assets/images/deal_ofthe_week.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 text-right deal_ofthe_week_col">
              <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                
                <marquee className="title" behavior="alternate" >Deal Of The Week</marquee>
            
               
                <ul className="timer">
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="day" className="timer_num">03</div>
                    <div className="timer_unit">Ngày</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="hour" className="timer_num">15</div>
                    <div className="timer_unit">Giờ</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="minute" className="timer_num">45</div>
                    <div className="timer_unit">Phút</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="second" className="timer_num">23</div>
                    <div className="timer_unit">Giây</div>
                  </li>
                </ul>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
