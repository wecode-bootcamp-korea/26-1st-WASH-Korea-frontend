import React, { Component } from 'react';
import './Product.scss';

export class Product extends Component {
  render() {
    const { productData } = this.props;

    return (
      <>
        {productData.map((product, i) => {
          return (
            <li className="productParts" key={product.id}>
              <div className="listContent">
                <img
                  className="productThumbnail"
                  alt="productimg"
                  src={product.product_image}
                />
                <div className="productTag">
                  {product.tags.indexOf('NEW') === -1 ? (
                    <span />
                  ) : (
                    <span className="productTagCircle">{product.tags}</span>
                  )}
                </div>
                <div className="productName">{product.name}</div>
                <div className="productSubName">{product.sub_name}</div>
                <div className="productPrice">
                  ₩ {Math.floor(product.price).toLocaleString('ko-KR')}
                </div>
              </div>
            </li>
          );
        })}
      </>
    );
  }
}

export default Product;
