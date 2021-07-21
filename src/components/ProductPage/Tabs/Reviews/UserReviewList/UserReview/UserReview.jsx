import React, { Component } from "react";

import "./UserReview.css";

export default class UserReview extends Component {

  render() {
    return (
      <div className="user_review_container d-flex flex-column flex-sm-row">
        <div className="user">
          <div className="user_pic" />
          <div className="user_rating">
            <ul className="star_rating">
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star-o" aria-hidden="true" />
              </li>
            </ul>
          </div>
        </div>
        <div className="review">
          <div className="review_date">27 Aug 2050</div>
          <div className="user_name">Thảo Nguyên</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    );
  }
}
