import React, { Component } from 'react';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/productList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data,
        });
      });
  }

  render() {
    const { productList } = this.state;

    return (
      <>
        {productList.map((el, i) => {
          return (
            <li className="productParts" key={i}>
              <div className="listContent">
                <img
                  className="productThumbnail"
                  alt="productimg"
                  src={el.thumbnail}
                />
                <div className="productTag">
                  {!el.isNew ? (
                    <span />
                  ) : (
                    <span className="productTagCircle">NEW</span>
                  )}
                </div>
                <div className="productName">{el.name}</div>
                <div className="productSubName">{el.sub_name}</div>
                <div className="productPrice">₩ {el.price}</div>
              </div>
            </li>
          );
        })}
      </>
    );
  }
}

export default Product;
