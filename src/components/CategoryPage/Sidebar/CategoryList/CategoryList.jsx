import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default class CategoryList extends Component {
  constructor (props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick (category) {
    const { onSelectedCategoryChanged } = this.props;
    if (onSelectedCategoryChanged) {
      onSelectedCategoryChanged(category);
    }
  }
  
  render () {
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Danh mục sản phẩm</h5>
        </div>
        <ul className="sidebar_categories">
          {this.props.categories.map((category) => (
            <li 
            key={category.id} 
            onClick={() => this.onItemClick(category)} 
            className={cx({
              'active': category.id === this.props.selectedCategoryId
            })}>
              <a href="#">{category.id === this.props.selectedCategoryId && 
              <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>}{category.name}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}
