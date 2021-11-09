import React, { Component } from 'react';
import ListHeader from './ListHeader/ListHeader';
import ListMenu from './ListMenu/ListMenu';
import Product from './Product/Product';
import './ProductList.scss';

export class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      header: {},
      category: {},
      subCategory: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      fetch(
        `http://10.58.2.138:8000/products/productlist${this.props.location.search}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            product: data.results.data,
            header: data.results.products_header,
          });
        });
    }
  }

  componentDidMount() {
    fetch('http://10.58.2.138:8000/products/productlist?category=1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.results.data,
          header: data.results.products_header,
        });
      });

    fetch('http://10.58.2.138:8000/categories/1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          category: data.results,
          subCategory: data.results.subcategories,
        });
      });
  }

  render() {
    const { product, header, category, subCategory } = this.state;

    return (
      <div className="productList">
        <ListHeader listHeader={header} />
        <ListMenu
          menuCategory={category}
          menuSubCategory={subCategory}
          listHeader={header}
        />
        <div className="products">
          <ul className="productSpace">
            <Product listProduct={product} />
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
