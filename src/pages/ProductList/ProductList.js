import React, { Component } from 'react';
import ListHeader from './ListHeader/ListHeader';
import ListMenu from './ListMenu/ListMenu';
import Product from './Product/Product';
import './ProductList.scss';

export class ProductList extends Component {
  render() {
    return (
      <div className="productList">
        <ListHeader />
        <ListMenu />
        <div className="products">
          <ul className="productSpace">
            <Product />
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
