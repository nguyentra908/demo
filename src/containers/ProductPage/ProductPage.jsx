import React, { Component } from 'react';
import { connect } from "react-redux";
import { ShippingInformation, Breadcrumb } from '../../components/shared';
import ProductDetails from '../../components/ProductPage/Details/ProductDetails';
import Tabs from '../../components/ProductPage/Tabs/Tabs';
import { getProductInfo } from '../../actions/ProductActions';
import { addToCart } from '../../actions/CartActions';
import './ProductPage.css';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductInfo(id));
  }

  onAddProduct(product, amount) {
    if (!product || !amount) return;
    this.props.dispatch(addToCart(product, amount));
  }

  render() {
    const { product, loading } = this.props;
    return (
      <div>
        <div className="container single_product_container">
          {!loading && product &&
            <ProductDetails
              product={product}
              onAddProduct={this.onAddProduct}
            ></ProductDetails>}
        </div>
        <Tabs product={product}></Tabs>
        <ShippingInformation></ShippingInformation>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.item,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductPage);
