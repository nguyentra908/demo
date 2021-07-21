import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './FilterByPrice';

export default class FilterByPrice extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: {
        min: +0,
        max: +1000
      }
    }

    this.onFilterChanged = this.onFilterChanged.bind(this);
  }

  onFilterChanged() {
    const { onFilterPriceChanged } = this.props;
    if (onFilterPriceChanged) {
      onFilterPriceChanged(this.state.value);
    }
  }
  
  render () {
    const min =  0;
    const max = 1000;
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Lọc theo giá</h5>
        </div>
        <InputRange
          maxValue={+max}
          minValue={+min}
          value={this.state.value}
          onChange={value => this.setState({value})}/>
        <div id="slider-range"></div>
        <div className="filter_button" onClick={this.onFilterChanged}><span>Lọc</span></div>
      </div>
    );
  }
}
