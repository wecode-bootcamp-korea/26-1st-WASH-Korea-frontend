import React, { Component } from 'react';

export class ProductThumbnail extends Component {
  render() {
    const { productImage } = this.props;

    return (
      <div className="productThumbnail">
        <img src={productImage[0].url} alt="soap" />
      </div>
    );
  }
}

export default ProductThumbnail;
