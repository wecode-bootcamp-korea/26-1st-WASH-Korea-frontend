import React, { Component } from 'react';
import ListHeader from './ListHeader/ListHeader';
import ListMenu from './ListMenu/ListMenu';
import Product from './Product/Product';
import './ProductList.scss';

export class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
      product: [],
      menuListDetail: {},
    };
  }

  componentDidMount() {
    fetch('/data/listMenu.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data,
          menuListDetail: data[0],
        });
      });

    fetch('/data/productList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data,
        });
      });
  }

  //   fetch('http://10.58.2.138:8000/main/products')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         product: data.results,
  //       });
  //     });
  // }

  render() {
    const { menuList, product, menuListDetail } = this.state;

    return (
      <div className="productList">
        <ListHeader
          menuData={menuList}
          productData={product}
          menuDataDetail={menuListDetail}
        />
        <ListMenu
          productData={product}
          menuDataDetail={menuListDetail}
          menuData={menuList}
        />
        <div className="products">
          <ul className="productSpace">
            <Product productData={product} />
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
