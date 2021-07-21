import React, { Component } from "react";
import history from '../../history';
import './FormLogin.css';
class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
    const { email, password } = this.state;
    //Kiểm tra email
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: "Incorrect email format"
      };
    }
    //Kiểm tra password
    if ( password.length < 8) {
      returnData = {
        error: true,
        msg: "Password must be greater than 8 characters"
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
       email: "",
       password:""
      }, ()=> alert("Sign In successful"));
      
     
    }
  }

  onRedirectToRegister(){
    window.scrollTo(0, 0) 
    history.push('/register');
  }

  render() {
    
    return (
      <div className="login_container" style={{ paddingTop: "15%" }}>
        <div className="login-page">
          <div className="login" >
            <div className="login-header-text">Sign In here</div>
            <form className="form_login"
              onSubmit={e => {
                this.submitForm(e);
              }}
            >
              <div className="form-group" />
              
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Enter Username"
                value={this.state.email}
                onChange={e => this.changeInputValue(e)}
              />
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  onChange={e => this.changeInputValue(e)}
                  value={this.state.password}
                />
              </div>
              <div className="form-group"  style={{ marginTop: '1rem' }}>
                <input
                  id="btnsubmit"
                  type="submit"
                  className="form-control"
                  value="Sign In"
                
                />
              </div>
              <div className="form-group" style={{ marginTop: '1rem', display:'flex', justifyContent:'center' }}>
                <span style={{opacity: 0.8}}>Do not have an account? &nbsp;</span>
                <span onClick={()=>this.onRedirectToRegister()} style={{color: 'orange'}}>Sign Up</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default FormLogin;
