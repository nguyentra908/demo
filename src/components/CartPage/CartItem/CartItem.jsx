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
          <span onClick={() => this.onClickRemove(product.id)}><i style={{fontSize: 20, marginRight: 5}} class="fa fa-times-circle-o" aria-hidden="true"></i></span>
          <img
            style={{ width: "60px", height: "60px", marginRight: 10 }}
            src={`assets/${product.thumbnail}`}
            alt={product.thumbnail}
          />
          <span>{product.name}</span>
        </td>
        <td className="vertical-mid">
          <span>{product.salePrice}</span>
        </td>
        <td className="vertical-mid">
          <div className="quantity_selector" style={{ marginLeft: 0, width: '100px', height: 'auto' }}>
            <span className="minus" onClick={() => this.changeQuanlity(-1)}>
              <i className="fa fa-minus" aria-hidden="true" />
            </span>
            <span>{amount}</span>
            <span className="plus" onClick={() => this.changeQuanlity(1)}>
              <i className="fa fa-plus" aria-hidden="true" />
            </span>
          </div>
        </td>
        <td className="vertical-mid">
          <span>{product.salePrice * amount}</span>
        </td>
        
      </tr>
    );
  }
}