import React, {Component} from 'react';

import './Footer.css';
import Footer1 from './Footer1';
import Footer2 from './Footer2';

export class Footer extends Component {
  render () {
    return (
      <footer className="footer">
       <Footer1></Footer1>
        <Footer2></Footer2>
      </footer>
    );
  }
}
