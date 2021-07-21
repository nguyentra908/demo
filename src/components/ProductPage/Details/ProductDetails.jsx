import React, { Component } from 'react';
import cx from 'classnames';

import Thumbnails from './Thumbnails/Thumbnails';
import './ProductDetails.css';
import { ShippingInformation, Breadcrumb } from '../../../components/shared';

import history from '../../../history';
export default class ProductDetails extends Component {
	onRouteChanged = (url) => {
		window.scrollTo(0, 0)
		history.push(url);
	  }
	constructor(props) {
		super(props);

		this.state = {
			isFavorite: false,
			quantity: 1
		}

		this.changeFavorite = this.changeFavorite.bind(this);
		this.changeQuanlity = this.changeQuanlity.bind(this);
		this.onClickAddProduct = this.onClickAddProduct.bind(this);
	}

	changeQuanlity(number) {
		let quantity = this.state.quantity + number;

		if (quantity < 1) {
			quantity = 1;
		}

		this.setState({
			isFavorite: this.state.isFavorite,
			quantity
		});
	}

	changeFavorite() {
		this.setState({
			isFavorite: !this.state.isFavorite,
			quantity: this.state.quantity
		});
	}

	onClickAddProduct(product) {
		if (!product) return;

		const { onAddProduct } = this.props;
		if (onAddProduct) {
			onAddProduct(product, this.state.quantity);
		}
	}

	render() {
		const staticClass = "product_favorite d-flex flex-column align-items-center justify-content-center";
		const { product } = this.props;
		return (

			<div className="container">
				<div className="row">
					<div className="breadcrumbs d-flex flex-row align-items-center" >
						<ul>
							<li><a onClick={() => { this.onRouteChanged('/') }} >Home</a></li>
							<li ><a onClick={() => { this.onRouteChanged('/categories') }}  ><i className="fa fa-angle-right" aria-hidden="true"></i>Products</a></li>
							<li className="active"><a  ><i className="fa fa-angle-right" aria-hidden="true"></i>{product.name}</a></li>


						</ul>
					</div>
				</div>
				<div className="row">
					<Thumbnails images={product.image}></Thumbnails>
					<div className="col-lg-5">
						<div className="product_details">
							<div className="product_details_title">
								<h2>{product.name}</h2>
								<p>{product.shortDescription}</p>
							</div>
							<div className="free_delivery d-flex flex-row align-items-center justify-content-center">
								<span className="ti-truck"></span><span>free delivery</span>
							</div>
							{product.salePrice !== product.originalPrice && <div className="original_price">$ {product.originalPrice}</div>}
							<div className="product_price">$ {product.salePrice}</div>
							<ul className="star_rating">
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
								<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
							</ul>
							<div className="product_color">
								<span>Colors</span>
								<ul>
									<li style={{ background: product.color, border: '0.5px solid' }}></li>
								</ul>
							</div>
							<div className="product_color">
								<span>Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
								{
									product.size.map(e => (
										<span>{e} &nbsp;&nbsp;</span>
									))
								}
							</div>
							<div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
								<span>Quanity</span>
								<div className="quantity_selector">
									<span className="minus" onClick={() => this.changeQuanlity(-1)}><i className="fa fa-minus" aria-hidden="true"></i></span>
									<span id="quantity_value">{this.state.quantity}</span>
									<span className="plus" onClick={() => this.changeQuanlity(1)}><i className="fa fa-plus" aria-hidden="true"></i></span>
								</div>
								<div className={cx(staticClass, {
									'active': this.state.isFavorite
								})}
									onClick={this.changeFavorite}></div>
								
							</div>
							<div className="red_button add_to_cart_button" onClick={() => this.onClickAddProduct(product)}><span style={{ cursor: 'pointer' }} >Add to Cart</span></div>
								
						</div>
					</div>
				</div>
			</div>
		)
	}
}
