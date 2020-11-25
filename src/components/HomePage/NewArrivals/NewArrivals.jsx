import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import memoize from 'memoize-one';
import products from '../../../services/data/products';
import { ProductList } from '../../shared';
import CategoryOptions from './CategoryOptions/CategoryOptions';

import { fetchCategories } from '../../../actions/CategoryActions';
import { fetchProducts } from '../../../actions/ProductActions';

import './NewArrivals.css';

class NewArrivals extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filteredProducts: [],
      selectedCategoryId: ''
    }

    this.onProductsChange = memoize(
      () => {
        if (this.state && this.state.filteredProducts.length > 0) return;

        this.setState({
          filteredProducts: products
        });
      }
    )

    this.onCategoriesChange = memoize(
      (categories) => {
        if (this.state && this.state.selectedCategoryId) {
          if (_.find(categories, (category) => {
            if (category.id === this.state.selectedCategoryId) {
              return true;
            }
          })) {
            return;
          }
        }

        this.setState((prevState) => ({
          filteredProducts: prevState.filteredProducts,
          selectedCategoryId: categories.length > 0 ? categories[0].id : ''
        }));
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
    this.setState({
      filteredProducts,
      selectedCategoryId: category.id
    });
  }

  render() {
    this.onProductsChange(this.props.products);
    this.onCategoriesChange(this.props.categories);

    return (
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>Sản phẩm mới</h2>
              </div>
            </div>
          </div>
          {!this.props.loadingCategories && <CategoryOptions
            categories={this.props.categories}
            selectedCategoryId={this.state.selectedCategoryId}
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