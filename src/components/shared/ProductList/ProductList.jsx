import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import ProductCard from './ProductCard/ProductCard';
import { addToCart } from '../../../actions/CartActions';
import './ProductList.css';
import history from '../../../history';
class ProductList extends Component {

  onClickProduct = (id) => () => {
    window.scrollTo(0, 0)
    history.push(`/product/${id}`);
  }

  onAddProduct = (product) => {
    this.props.dispatch(addToCart(product, 1));
  }

  renderProductList = () => {
    const { products } = this.props;
    return products.map(product =>
      <ProductCard
        key={product.id}
        product={product}
        onClickProduct={this.onClickProduct(product.id)}
        onAddProduct={this.onAddProduct} />
    )

  }

  render() {
    return (
      <div className="row">
        <div className="col products-list">
          {this.renderProductList()}
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

export default connect()(ProductList);
