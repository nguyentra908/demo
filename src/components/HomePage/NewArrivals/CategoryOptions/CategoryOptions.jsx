import React, { Component } from 'react';
import { connect } from "react-redux";
import cx from 'classnames';
import PropTypes from 'prop-types';

import './CategoryOptions.css';

import { filterProducts } from '../../../../store/actions/Product/ProductApi';
import { fetchCategories } from '../../../../store/actions/Category/CategoryApi';

class CategoryOptions extends Component {
  constructor (props) {
    super(props);

    const { categories } = this.props;

    this.state = {
      selectedCategoryId: categories.length > 0
        ? categories[0].id : ''
    }

    this.onItemClick = this.onItemClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  onItemClick (category) {
    this.setState({
      selectedCategoryId: category.id
    });

    this.props.dispatch(filterProducts(category.id));
  }

  render () {
    const itemStaticClasses = 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center';

    return (
      <div className="row align-items-center">
        <div className="col text-center">
          <div className="new_arrivals_sorting">
            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
              {this.props.categories.map(category => (
                <li
                  key={category.id}
                  className={cx(itemStaticClasses, {
                    'active is-checked': category.id === this.state.selectedCategoryId
                  })}
                  onClick={() => this.onItemClick(category)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

CategoryOptions.propTypes = {
  categories: PropTypes.array.isRequired,
  defaultCategoryId: PropTypes.string
};

CategoryOptions.defaultProps = {
  defaultCategoryId: ''
};

const mapStateToProps = state => ({
  categories: state.categories.items,
  loading: state.categories.loading,
  error: state.categories.error
});

export default connect(mapStateToProps)(CategoryOptions);