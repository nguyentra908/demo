import React, { Component } from "react";

import "./FormReview.css";

export default class FormReview extends Component {

  render() {
    return (
      <div className="col-lg-6">
        <div className="add_review">
          <form id="review_form" action="post">
            <div>
              <h1> Add Comment</h1>
              <input
                id="review_name"
                className="form_input input_name"
                type="text"
                name="name"
                placeholder="Name*"
                required="required"
                data-error="Name is required."
              />
              <input
                id="review_email"
                className="form_input input_email"
                type="email"
                name="email"
                placeholder="Email*"
                required="required"
                data-error="Valid email is required."
              />
            </div>
            <div>
              <h1>Rating:</h1>
              <ul className="user_star_rating">
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
              <textarea
                id="review_message"
                className="input_review"
                name="message"
                placeholder="Your Review"
                rows="4"
                required
                data-error="Please, leave us a review."
              />
            </div>
            <div className="text-left text-sm-right">
              <button
                id="review_submit"
                type="submit"
                className=" review_submit_btn trans_300"
                value="Submit"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
