import React, { Component } from 'react';
import './SortingDropDown.css';

export default class SortingDropDown extends Component {
  constructor (props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick (option) {
    if (!option) return;

    const { onSortOptionChanged } = this.props;
    if (onSortOptionChanged) {
      onSortOptionChanged(option);
    }
  }
  
  render () {
    return (
      <li>
        <span>{this.props.selectedOption.name}</span>
        <i className="fa fa-angle-down"></i>
        <ul>
          {this.props.options.map((option) => (
            <li onClick={() => this.onItemClick(option)} key={option.name}><span>{option.name}</span></li>
          ))}
        </ul>
      </li>
    );
  }
}
