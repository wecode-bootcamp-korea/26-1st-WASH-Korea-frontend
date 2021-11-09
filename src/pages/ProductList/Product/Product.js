import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

export class Product extends Component {
  render() {
    const { listProduct } = this.props;
    return (
      <>
        {listProduct.map(product => {
          return (
            <Link to={`/productDetail/${product.id}`} key={product.id}>
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
        })}
      </>
    );
  }
}

export default Product;
