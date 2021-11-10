import React, { Component } from 'react';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductButton from './ProductButton/ProductButton';
import ProductContent from './ProductContent/ProductContent';
import './ProductDetail.scss';

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      details: {},
    };
  }

  getData = () => {
    const id = this.props.match.params.id;
    fetch(`http://10.58.2.138:8000/products/${id}`)
      .then(res => res.json())
      .then(res => this.setState({ details: res.result }));
  };

  componentDidMount() {
    this.getData();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.math.params.id !== this.props.match.params.id) {
  //     this.getData();
  //   }
  // }

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
    const { quantity, details } = this.state;
    const { id, name, price, product_image, sub_name, weight, description } =
      details;

    return id ? (
      <>
        <section className="productDetail">
          <ProductThumbnail productImage={product_image} />
          <ProductInformation
            id={id}
            price={price}
            productImage={product_image}
            productName={name}
            subName={sub_name}
            weight={weight}
            description={description}
            quantity={quantity}
            countUpQunatity={this.countUpQunatity}
            countDownQuantity={this.countDownQuantity}
          />
        </section>

        <ProductButton />

        <ProductContent productName={name} description={description} />
      </>
    ) : null;
  }
}

export default ProductDetail;
