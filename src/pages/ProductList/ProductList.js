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

  changeMenu = valueId => {
    fetch(`/data/productList_${valueId}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.result,
        });
      });

    fetch('/data/listMenu.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data,
          menuListDetail: data[valueId - 1],
        });
      });
  };

  componentDidMount() {
    fetch('/data/listMenu.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data,
          menuListDetail: data[0],
        });
      });

    fetch('/data/productList_1.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.result,
        });
      });
  }

  render() {
    const { menuList, product, menuListDetail } = this.state;

    return (
      <div className="productList">
        <ListHeader menuDataDetail={menuListDetail} />
        <ListMenu
          menuDataDetail={menuListDetail}
          menuData={menuList}
          changeMenu={this.changeMenu}
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
