import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../../history';
import swal from 'sweetalert';
import './Order.css'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { resetCart } from '../../../actions/CartActions';



const Order = (props) => {
	const items = useSelector(state => state.cart.items);
	if (!items || (items && !items.length)) {
		swal("No products in the Cart!")
			.then((value) => {
				window.scrollTo(0, 0)
				history.push('/categories')
			})
	}

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [note, setNote] = useState('')
	const dispatch = useDispatch();
	const totalPrice = useSelector(state => state.cart.totalPrice);
	const renderListProduct = useMemo(() => {
		return (
			<ListGroup>
				{
					items.map((item, index) => (
						<ListGroupItem>
							<div className="row">
								<span className="col-md-2 item"><img alt='' style={{ width: 50, height: 50 }} src={`assets/${item.product.image}`} /></span>
								<span className="col-md-6 item">{item.product.name}</span>
								<span className="col-md-2 item">{item.amount}</span>
								<span className="col-md-2 item">{item.product.salePrice * item.amount}$</span>
							</div>
						</ListGroupItem>
					))
				}
				<ListGroupItem >
					<div className="row">
						<span className="col-md-10 item">Tạm tính</span>
						<span className="col-md-2 item">{totalPrice}$</span>
					</div>
				</ListGroupItem>
				<ListGroupItem >
					<div className="row">
						<span className="col-md-10 item">Phí vận chuyển</span>
						<span className="col-md-2 item">0$</span>
					</div>
				</ListGroupItem>
				<ListGroupItem >
					<div className="row">
						<span className="col-md-10 item">Thành tiền</span>
						<span className="col-md-2 item">{totalPrice}$</span>
					</div>
				</ListGroupItem>
			</ListGroup>
		)
	}, [items])

	const submitForm = (e) => {
		const orderInfo = {
			items,
			totalPrice,
			recipient: {
				name,
				email,
				phone,
				address
			}
		}
		swal("Order complete!")
			.then((value) => {
				window.scrollTo(0, 0)
				history.push('/');
				dispatch(resetCart());
			})
	}

	const backToCart = () => {
		window.scrollTo(0, 0)
		history.push('/cart');
	}

	const renderOrderInformation = () => {
		return (
			<div className="oder_page">
				<form>
					<div className="form-group" />
					{/* <label>Full Name</label> */}
					<input
						type="text"
						className="form-control"
						name="name"
						placeholder="
						Enter Name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<div className="form-group" />
					{/* <label>Email</label> */}
					<input
						type="text"
						className="form-control"
						name="email"
						value={name}
						placeholder="Enter Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<div className="form-group" />
					{/* <label>Phone Number</label> */}
					<input
						type="text"
						className="form-control"
						name="phone"
						value={phone}
						placeholder="Enter Phone Number"
						onChange={e => setPhone(e.target.value)}
					/>
					<div className="form-group" />
					{/* <label>Địa chỉ giao hàng</label> */}
					<input
						type="text"
						className="form-control"
						name="phonenumber"
						placeholder="Enter Address"
						value={address}
						onChange={e => setAddress(e.target.value)}
					/>
					<div className="form-group" />
					{/* <label>Order note</label> */}
					<textarea
						type="text"
						className="form-control"
						name="note"
						placeholder="Order note: time, receiver ..."
						value={note}
						onChange={e => setNote(e.target.value)}
						maxLength={200}
						rows={3}
						style={{ maxHeight: '90px' }}
					/>
					<div className="form-group" />
					<span className="btn btn-outline-secondary" style={{ marginTop: "10px" }}
						onClick={() => backToCart()}> <i className="fa fa-angle-double-left"></i> Back to Cart</span>


				</form>
			</div>
		)
	}
	return (
		<div style={{ marginTop: '200px', marginBottom: 20 }} className="container">
			<div className="order-header">Order Information</div>
			<div className="row">
				<div className="order-information col-md-7">
					{renderOrderInformation()}
				</div>
				<div className="list-items col-md-5 payment-info-" style={{ marginTop: 16 }}>
					{
						renderListProduct
					}
					<label class="container-radio-1 mt-2">
						Payment on delivery
  					<input type="radio" name="radio" checked={true} disabled />
						<span class="checkmark-radio-1"></span>
					</label>
					<input className="red_button" type="button" style={{
						fontSize: 15, width: '100%',
						border: 'none', color: "white", marginTop: "20px"
					}} value="Payment" onClick={e => {
						submitForm(e);
					}}
					/>
				</div>
			</div>

		</div>
	);
};

export default Order;
