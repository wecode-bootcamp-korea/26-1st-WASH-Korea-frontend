import React, { Component } from 'react';

export class ProductDetailTexts extends Component {
  render() {
    const { productName, description } = this.props;
    return (
      <div className="productDetaiDescription" ref={this.tabMenuDescription}>
        <h2>
          <span>솝</span>
          {productName}
        </h2>
        {description}
      </div>
    );
  }
}

export default ProductDetailTexts;
