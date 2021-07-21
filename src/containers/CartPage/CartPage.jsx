import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CartPage.css';
import { ShippingInformation } from '../../components/shared/layouts/ShippingInformation/ShippingInformation';
import CartItem from '../../components/CartPage/CartItem/CartItem';
import { addToCart, removeFromCart } from '../../actions/CartActions';
import history from '../../history';
class CartPage extends Component {
  constructor(props) {
    super(props);

    this.onUpdateAmount = this.onUpdateAmount.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onUpdateAmount(product, amount) {
    if (!product || !amount) return;

    this.props.dispatch(addToCart(product, amount));
  }

  onRemoveItem(productId) {
    if (!productId) return;

    this.props.dispatch(removeFromCart(productId));
  }

  backToListProduct = () => {
    window.scrollTo(0, 0)
    history.push('/categories');
  }

  order() {
    window.scrollTo(0, 0)
    history.push('/order')
  }

  render() {
    const { items, totalPrice } = this.props;
    if (!items || (items && !items.length)) {
      return <div style={{ marginTop: '200px', fontSize: 20,textAlign:"center" }} className="container text-warning">
      No Products in the Cart!
      
        <hr style={{ marginTop: '60px' }} />
        <ShippingInformation></ShippingInformation>
      </div>
    }
    return (
      <div>
        <div style={{ marginTop: '200px' }} className="container">
          <div className="row">
            <div className="col-md-7" style={{ borderRight: '1px solid' }}>

              <table className="table" >
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Unit</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <CartItem
                      key={item.product.id}
                      item={item}
                      onUpdateAmount={this.onUpdateAmount}
                      onRemoveItem={this.onRemoveItem}></CartItem>
                  ))}
                  <tr>
                    <td>
                      <span className="btn btn-outline-secondary" style={{marginTop:"20px"}}
                     onClick={() => this.backToListProduct()}> <i className ="fa fa-angle-double-left"></i> Continue to see the products</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-5">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan="2">Invoice Total</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Subtotal </td>
                    <td>${totalPrice}</td>
                  </tr>
                  <tr>
                    <td>Delivery</td>
                    <td>Free delivery</td>
                  </tr>
                  <tr>
                    <td> Total </td>
                    <td>${totalPrice}</td>
                  </tr>
                  <tr>
                  <td colSpan="2">
                      <input className="red_button" type="button" style={{
                        fontSize: 15, width: '100%',
                     border: 'none', color:"white", marginTop:"10px"
                      }} onClick={() => { this.order() }} value="Payment" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>



        </div>
        <ShippingInformation></ShippingInformation>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.cart.items,
  totalPrice: state.cart.totalPrice
});

export default connect(mapStateToProps)(CartPage);
