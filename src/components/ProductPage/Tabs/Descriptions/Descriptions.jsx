import React, { Component } from "react";

import "./Descriptions.css";

export default class Descriptions extends Component {
  render() {
    const {product} = this.props;
    if(!product) return (<div>No data</div>)
    const [img1, img2, img3] = product.listImage;
    return (
      <div className="tab_container active">
        <div className="row">
          <div className="col-lg-5 desc_col">
            <div className="tab_text_block">
              <h2>Pocket cotton sweatshirt</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, aut. Numquam, rem voluptatibus eveniet corrupti
                fugit quos fugiat, qui aut dicta tenetur mollitia neque labore
                praesentium ab itaque suscipit inventore.
              </p>
            </div>
            <div className="tab_image">
              <img src={`/assets/${img1}`} alt="" />
            </div>
            <div className="tab_text_block">
              <h2>Pocket cotton sweatshirt</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id in
                neque quis iusto et assumenda nulla ea ullam sint nihil quos
                ratione animi, repellat corrupti ducimus unde, fugiat dolor a.
              </p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 desc_col">
            <div className="tab_image">
              <img src={`/assets/${img2}`} alt="" />
            </div>
            <div className="tab_text_block">
              <h2>Pocket cotton sweatshirt</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                vel nam repellat asperiores illo inventore eaque voluptate
                saepe. Rerum nisi, dolorem est cumque error deserunt quasi!
                Aliquid consequatur inventore fugiat.
              </p>
            </div>
            <div className="tab_image desc_last">
              <img src={`/assets/${img3}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
