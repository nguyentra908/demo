import React, { Component } from "react";

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
        msg: "Không đúng định dạng email"
      };
    }
    //Kiểm tra password
    if (password.length < 8) {
      returnData = {
        error: true,
        msg: "Mật khẩu phải lớn hơn 8 ký tự"
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
      alert("Đăng nhập thành công");
    }
  }
  render() {
    return (
      <div className="container" style={{ paddingTop: "15%" }}>
        <h3>ĐĂNG NHẬP</h3>
        <div className="login" style={{ width: "500px" }}>
          <form
            onSubmit={e => {
              this.submitForm(e);
            }}
          >
            <div className="form-group" />
            <label htmlFor="pwd">Nhập Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Nhập Email"
              onChange={e => this.changeInputValue(e)}
            />
            <div className="form-group">
              <label htmlFor="pwd">Nhập Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                onChange={e => this.changeInputValue(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormLogin;
