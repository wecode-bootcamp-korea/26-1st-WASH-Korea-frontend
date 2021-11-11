import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

export class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <Link to={`/productdetail/${product.id}`}>
        <li className="productParts">
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
                <span className="productTagCircle">NEW</span>
              )}
            </div>
            <div className="productName">{product.name}</div>
            <div className="productSubName">{product.sub_name}</div>
            <div className="productPrice">
              ₩ {Math.floor(product.price).toLocaleString('ko-KR')}
            </div>
          </div>
        </li>
      </Link>
    );
  }
}

export default Product;
