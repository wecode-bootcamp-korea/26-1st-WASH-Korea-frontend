import React, { Component } from 'react';
import ProductDetail from './ProductDetail';

export class ProductDetailsTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productDetail.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data.result,
        });
      });
  }
  render() {
    const { details } = this.state;
    return (
      <div>
        {details &&
          details.map(product => {
            return (
              <ProductDetail
                key={product.id}
                id={product.id}
                price={product.price}
                productImage={product.product_image}
                productName={product.name}
                subName={product.sub_name}
                weight={product.weight}
                description={product.description}
              />
            );
          })}
      </div>
    );
  }
}

export default ProductDetailsTemplate;
