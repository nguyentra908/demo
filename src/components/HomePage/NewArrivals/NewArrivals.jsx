import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import memoize from 'memoize-one';

import { ProductList } from '../../shared';
import CategoryOptions from './CategoryOptions/CategoryOptions';

import { fetchCategories } from '../../../actions/CategoryActions';
import { fetchProducts } from '../../../actions/ProductActions';

import './NewArrivals.css';

class NewArrivals extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filteredProducts: []
    }

    this.onProductsChange = memoize(
      (products) => {
        if (this.state && this.state.filteredProducts.length > 0) return;

        this.setState({
          filteredProducts: products
        });
      }
    )

    this.onSelectedCategoryChanged = this.onSelectedCategoryChanged.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchProducts());
  }

  onSelectedCategoryChanged(category) {
    if (!category || !category.id) return;

    const filteredProducts = category.id === 'all' 
      ? this.props.products : _.filter(this.props.products, { categoryId: category.id });
    this.setState({ filteredProducts });
  }

  render() {
    this.onProductsChange(this.props.products);

    return (
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          {!this.props.loadingCategories && <CategoryOptions
            categories={this.props.categories}
            onSelectedCategoryChanged={this.onSelectedCategoryChanged}>
          </CategoryOptions>}

          {!this.props.loadingProducts && <ProductList
            products={this.state.filteredProducts}>
          </ProductList>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loadingProducts: state.products.loading,
  errorProducts: state.products.error,
  categories: state.categories.items,
  loadingCategories: state.categories.loading,
  errorCategories: state.categories.error
});

export default connect(mapStateToProps)(NewArrivals);