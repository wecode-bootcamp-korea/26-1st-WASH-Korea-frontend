import React, { Component } from 'react';
import DOMPurify from 'dompurify';

export class ProductDetailTexts extends Component {
  render() {
    const { description } = this.props;
    return (
      <div className="productDetaiDescription" ref={this.tabMenuDescription}>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
      </div>
    );
  }
}

export default ProductDetailTexts;
