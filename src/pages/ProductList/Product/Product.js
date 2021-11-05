import React, { Component } from 'react';
import './Product.scss';

export class Product extends Component {
  render() {
    const { productData } = this.props;

    return (
      <>
        {productData.map((product, i) => {
          return (
            <li className="productParts" key={i}>
              <div className="listContent">
                <img
                  className="productThumbnail"
                  alt="productimg"
                  src={product.thumbnail}
                  // src={product.product_image}
                />
                <div className="productTag">
                  {!product.isNew ? (
                    <span />
                  ) : (
                    <span className="productTagCircle">NEW</span>
                  )}
                </div>
                {/* <div className="productName">{product.name}</div>
                <div className="productSubName">{product.sub_name}</div>
                <div className="productPrice">₩ {product.price}</div> */}
                <div className="productName">{product.name}</div>
                <div className="productSubName">{product.sub_name}</div>
                <div className="productPrice">₩ {product.price}</div>
              </div>
            </li>
          );
        })}
      </>
    );
  }
}

export default Product;
