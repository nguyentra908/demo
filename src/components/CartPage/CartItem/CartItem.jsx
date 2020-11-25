import React, { Component } from "react";

import "./CartItem.css";

export default class CartItem extends Component {
  constructor(props) {
    super(props);

    this.changeQuanlity = this.changeQuanlity.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  changeQuanlity(value) {
    if (!value) return;

    const { onUpdateAmount } = this.props;
    if (onUpdateAmount) {
      onUpdateAmount(this.props.item.product, +value);
    }
  }

  onClickRemove(productId) {
    if (!productId) return;

    const { onRemoveItem } = this.props;
    if (onRemoveItem) {
      onRemoveItem(productId);
    }
  }

  render() {
    const { product, amount } = this.props.item;
    return (
      <tr>
        <td>
          <img
            style={{ width: "200px", height: "200px" }}
            src={`assets/${product.thumbnail}`}
            alt={product.thumbnail}
          />
        </td>
        <td>
          <h4>{product.name}</h4>
          <h5>Giá: $ {product.salePrice}</h5>
        </td>
        <td>
          <div className="quantity_selector">
            <span className="minus" onClick={() => this.changeQuanlity(-1)}>
              <i className="fa fa-minus" aria-hidden="true" />
            </span>
            <span>{amount}</span>
            <span className="plus" onClick={() => this.changeQuanlity(1)}>
              <i className="fa fa-plus" aria-hidden="true" />
            </span>
          </div>
        </td>
        <td>
          <button
            onClick={() => this.onClickRemove(product.id)}
            className="btn btn-remove btn-danger"
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}
