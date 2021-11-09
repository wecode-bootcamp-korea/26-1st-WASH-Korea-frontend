import React, { Component } from 'react';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductButton from './ProductButton/ProductButton';
import ProductContent from './ProductContent/ProductContent';
import './ProductDetail.scss';

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      details: [],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/productDetails/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data.result,
        });
      });
  }
  countUpQunatity = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  };
  countDownQuantity = () => {
    const { quantity } = this.state;

    this.setState({
      quantity: quantity < 2 ? 1 : quantity - 1,
    });
  };

  render() {
    const { quantity } = this.state;
    const {
      id,
      price,
      productImage,
      productName,
      subName,
      weight,
      description,
    } = this.props;
    return (
      <>
        <section className="productDetail">
          <ProductThumbnail productImage={productImage} />
          <ProductInfo
            id={id}
            price={price}
            productImage={productImage}
            productName={productName}
            subName={subName}
            weight={weight}
            quantity={quantity}
            countUpQunatity={this.countUpQunatity}
            countDownQuantity={this.countDownQuantity}
          />
        </section>

        <ProductButton />

        <ProductContent productName={productName} description={description} />
      </>
    );
  }
}

export default ProductDetail;
