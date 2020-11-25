import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import ProductCard from './ProductCard/ProductCard';
import { addToCart } from '../../../actions/CartActions';
import './ProductList.css';

class ProductList extends Component {
  constructor (props) {
    super(props);
    this.onClickProduct = this.onClickProduct.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onClickProduct (id) {
    this.props.history.push(`/product/${id}`);
  }

  onAddProduct (product) {
    this.props.dispatch(addToCart(product, 1));
  }

  render() {
    return (
      <div className="row">
        <div className="col products-list">
          {this.props.products.map(product => 
          <ProductCard
            key={product.id}
            product={product}
            onClickProduct={this.onClickProduct}
            onAddProduct={this.onAddProduct}/>)}
        </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  products: PropTypes.array,
};

ProductCard.defaultProps = {
  products: [],
};

export default withRouter(connect()(ProductList));
