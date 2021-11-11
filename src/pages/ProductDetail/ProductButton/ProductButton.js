import React, { Component } from 'react';
import './ProductButton.scss';

export class ProductButton extends Component {
  render() {
    return (
      <div className="productButton">
        <button className="cartButton">장바구니</button>
        <button className="orderButton">주문하기</button>
      </div>
    );
  }
}

export default ProductButton;
