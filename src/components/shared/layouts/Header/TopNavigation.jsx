import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopNavigation.css";

export default class TopNavigation extends Component {
  render() {
    return (
      <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">
                Miễn phí vận chuyển cho hóa đơn trên 100.000 đ
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  <li className="language">
                    <a href="#">
                      Tiếng Việt
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="language_selection">
                      <li>
                        <a href="#">Tiếng Anh</a>
                      </li>
                      <li>
                        <a href="#">Tiếng Hàn</a>
                      </li>
                      <li>
                        <a href="#">Tiếng Trung</a>
                      </li>
                      <li>
                        <a href="#">Tiếng Nhật</a>
                      </li>
                    </ul>
                  </li>
                  <li className="account">
                    <a href="#">
                      Tài Khoản
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="account_selection">
                      <li>
                        <a href="#">
                          <Link to="/Login">Đăng nhập</Link>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Link to="/Register">Đăng ký</Link>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
