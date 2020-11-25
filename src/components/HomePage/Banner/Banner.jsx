import React, {Component} from 'react';

import './Banner.css';

// gán biểu thức style trong jsx
const styles = {
  backgroundImage : "url(assets/images/slider_1.jpg)"
}

export default class Banner extends Component {
  render () {
    return (
      <div className="main_slider" style={styles}>
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>Bộ sưu tập Thu/ Đông 2050</h6>
                <h2>Giảm đến 30% Sản Phẩm Mới</h2>
                <div className="red_button shop_now_button"><a href="#">shop now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
