import React, { Component } from "react";
import history from '../../history';
import './FormRegister.css';
class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      confirmPass: "",
      phonenumber: ""
    };
  }
  // xây dựng hàm changeInputValue()
  //  có nhiệm vụ lấy giá của input sau đó cập nhật vào state
  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // kiểm tra các giá trị khi submit form
  validationForm() {
    let returnData = {
      error: false,
      msg: ""
    };
    const { email, password, name, phonenumber,confirmPass } = this.state;
    //Kiểm tra email
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: "Incorrect email format"
      };
    }
    //Kiểm tra password
    if (password.length < 8) {
      returnData = {
        error: true,
        msg: "Password must be greater than 8 characters"
      };
    }
    //Kiểm tra name
    if (name === "") {
      returnData = {
        error: true,
        msg: "Enter name"
      };
    }
    return returnData;
  }

  submitForm(e) {
    //Chặn các event mặc định của form
    e.preventDefault();

    //Gọi hàm validationForm() dùng để kiểm tra form
    const validation = this.validationForm();

    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg);
    } else {
      this.setState({
        name:"",
        email: "",
        password:"",
        phonenumber:"",
        confirmPass:""
       }, ()=> alert("Sign Up successful"));
       
    }
  }

  onRedirectToLogin() {
    window.scrollTo(0, 0)
    history.push('/login');
  }

  render() {
    return (
      <div className="register_container" style={{ paddingTop: "15%" }}>
        <div className="register-page">
          <div className="register" >
            <div className="register-header-text">Register here</div>
            <form className="form_register"
              onSubmit={e => {
                this.submitForm(e);
              }}
            >
              <div className="form-group" />
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Username"
                onChange={e => this.changeInputValue(e)}
                value={this.state.name}
              />
              <div className="form-group" style={{ marginTop: '1rem' }} />
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                onChange={e => this.changeInputValue(e)}
                value={this.state.email}
              />
              <div className="form-group" style={{ marginTop: '1rem' }} />
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                onChange={e => this.changeInputValue(e)}
                value={this.state.password}
              />
              <div className="form-group" style={{ marginTop: '1rem' }} />
              <input
                type="password"
                className="form-control"
                name="confirmPass"
                placeholder="Confirm password"
                onChange={e => this.changeInputValue(e)}
                value={this.state.confirmPass}
              />
              <div className="form-group" style={{ marginTop: '1rem' }} />
              <input
                type="text"
                className="form-control"
                name="phonenumber"
                placeholder="Enter Phone number"
                onChange={e => this.changeInputValue(e)}
                value={this.state.phonenumber}
                
              />
              <div className="form-group" style={{ marginTop: '1rem' }} >
                <input
                  id="btnsubmit"
                  type="submit"
                  className="form-control"
                  value="Register"

                />
              </div>
              <div className="form-group" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                <span style={{ opacity: 0.8 }}>
                  You already have an account? &nbsp;</span>
                <span onClick={() => this.onRedirectToLogin()} style={{ color: 'orange' }}>Sign In</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default FormRegister;
