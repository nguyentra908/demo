import React, { Component } from 'react';
import Banner from '../../components/HomePage/Banner/Banner';
import CategoriesBar from '../../components/HomePage/CategoriesBar/CategoriesBar';
import NewArrivals from '../../components/HomePage/NewArrivals/NewArrivals';
import Deals from '../../components/HomePage/Deals/Deals';

import { ShippingInformation } from '../../components/shared';

export default class HomePage extends Component {
  scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render () {
    return (
      <div className="super-container">
        <Banner />
        <CategoriesBar />
        <NewArrivals />
        <Deals />
        <a className="scroll_top" style={{ width:"30px",height:"30px",backgroundColor:"#f3f3f3", textAlign:"center", borderRadius:"50%", float:"right", marginTop:"12px", marginRight:"50px"}} onClick={() => { this.scrollToTop() }}>
          <i class="fa fa-arrow-up" aria-hidden="true" style={{ marginTop:"5px", fontSize: 20, opacity: 0.5 }}></i>
        </a>
        <ShippingInformation />
      </div>
    );
  }
}
