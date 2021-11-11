import React, { Component } from 'react';
import { API } from '../../config';
import ListHeader from './ListHeader/ListHeader';
import ListMenu from './ListMenu/ListMenu';
import Products from './Product/Product';
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

  fetchProductList(condition) {
    const { location } = this.props;
    fetch(`${API.productlist}${location.search || condition}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.results.data,
          header: data.results.products_header,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.search !== prevProps.location.search) {
      this.fetchProductList(true);
    }
  }

  componentDidMount() {
    this.fetchProductList('?category=1');

    fetch(`${API.categories}/1`)
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
            {product.map(productInfo => {
              return <Products product={productInfo} key={productInfo.id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
