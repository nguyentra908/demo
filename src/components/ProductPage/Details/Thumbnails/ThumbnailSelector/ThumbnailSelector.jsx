import React, { Component } from 'react';
import './ThumbnailSelector.css';
export default class ThumbnailSelector extends Component {
  constructor (props) {
    super(props);

    const { images } = this.props;

    this.state = {
      selectedImageUrl: images && images.length > 0 ? images[0] : ''
    }

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick (imageUrl) {
    this.setState({
      selectedImageUrl: imageUrl
    });

    const { onSelectedImageChange } = this.props;
    if (onSelectedImageChange) {
      onSelectedImageChange(imageUrl);
    }
  }

  render () {
    const {images} = this.props;
    if(!images | (images && !images.length)){
      return null;
    }
    return (
      <div className="col-lg-3 order-lg-1 order-2">
        <div className="single_product_thumbnails">
        <img src={`/assets/${images}`} alt={''}/>
        </div>
      </div>
    );
  }
}
