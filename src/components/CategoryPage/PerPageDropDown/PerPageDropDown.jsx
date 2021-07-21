import React, { Component } from 'react';

export default class PerPageDropDown extends Component {
  constructor (props) {
    super(props);

    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onClickHandle(value) {
    if (!value) return;

    const { onPerPageValueChange } = this.props;
    if (onPerPageValueChange) {
      onPerPageValueChange(value);
    }
  }

  render () {
    const { options, limitedValue } = this.props;
    return (
      <li>
        <span>Show</span>
        <span>{limitedValue}</span>
        <i className="fa fa-angle-down"></i>
        <ul>
          { options.map((value) => (
            <li
              key={value}
              onClick={() => this.onClickHandle(value)}
            ><span>{value}</span></li>
          ))}
        </ul>
      </li>
    );
  }
}
