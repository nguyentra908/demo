import React, {Component} from 'react';

import './Banner.css';
import history from '../../../history';
// gán biểu thức style trong jsx
const styles = {
  backgroundImage : "url(assets/images/slider_1.jpg)"
}

export default class Banner extends Component {
  onRouteChanged = (url) => {
    window.scrollTo(0, 0)
    history.push(url);
  }

  render () {
    return (
      <div className="main_slider" style={styles}>
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6> Autumn/Winter Collection 2020</h6>
                <h2>Up to 30% off new products</h2>
                <div className="red_button shop_now_button"><a  onClick={() => { this.onRouteChanged('/categories') }} >shop now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
