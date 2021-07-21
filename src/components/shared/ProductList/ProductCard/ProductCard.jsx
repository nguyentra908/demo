import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./ProductCard.css";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false
    };

    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onClickProduct = this.onClickProduct.bind(this);
    this.onAddProductClick = this.onAddProductClick.bind(this);
  }

  onFavoriteClick() {
    const prevState = this.state.isFavorite;
    this.setState({ isFavorite: !prevState });
  }

  onClickProduct(id) {
    if (!id) return;

    const { onClickProduct } = this.props;
    if (onClickProduct) {
      onClickProduct(id);
    }
  }

  onAddProductClick(product) {
    if (!product) return;

    const { onAddProduct } = this.props;
    if (onAddProduct) {
      onAddProduct(product);
    }
  }

  render() {

    const { product } = this.props;
    const isSale = product.salePrice < product.originalPrice;
    const originalPrice = isSale && <span>${product.originalPrice}</span>;
    return (
      <div className="product-item">
        <div
          className="product"
          onClick={() => this.onClickProduct(product.id)}
        >
          <div className="product_image">
            <img src={`assets/${product.image}`} alt={product.name} />
          </div>

          <div
            onClick={this.onFavoriteClick}
            className={cx("favorite favorite_left", {
              active: this.state.isFavorite
            })}
          />

          {isSale && (
            <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
              <span>Sale</span>
            </div>
          )}

          <div className="product_info">
            <h6 className="product_name">
              <span>{product.name}</span>
            </h6>
            <div className="product_price">
              ${product.salePrice}
              {originalPrice}
            </div>
          </div>
        </div>

        <div
          onClick={() => this.onAddProductClick(product)}
          className="cart_button"
        >
          <span>Add to Cart</span>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

ProductCard.defaultProps = {};
