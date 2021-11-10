import React, { Component } from 'react';
import { CATEGORIES, SUB_CATEGORIES } from './ProductInformationDatas';

export class ProductInformation extends Component {
  changePriceToString = price => {
    let includeCommaPrice = price.toString().split('');
    return (
      includeCommaPrice.slice(0, includeCommaPrice.length - 3).join('') +
      ',' +
      includeCommaPrice
        .slice(includeCommaPrice.length - 3, includeCommaPrice.length)
        .join('')
    );
  };

  render() {
    const {
      quantity,
      price,
      productName,
      subName,
      weight,
      countUpQunatity,
      countDownQuantity,
    } = this.props;

    const updatePrice = quantity * price;

    return (
      <div className="productInfo">
        <form className="categoryFiltering">
          <label htmlFor="categoryName">홈&nbsp;&nbsp;&gt;</label>
          <select name="categoryName" id="categoryName">
            <option value="wash">워시</option>
          </select>

          <label htmlFor="categoryName"> &gt; </label>
          <select name="categoryName" id="categoryName">
            {CATEGORIES.map(category => {
              return (
                <option value={category.engName} key={category.id}>
                  {category.korName}
                </option>
              );
            })}
          </select>

          <label htmlFor="categoryName"> &gt; </label>
          <select name="categoryName" id="categoryName">
            {SUB_CATEGORIES.map(subcategory => {
              return (
                <option value={subcategory.engName} key={subcategory.id}>
                  {subcategory.korName}
                </option>
              );
            })}
          </select>
        </form>

        <div className="productName">
          <h2>{productName}</h2>
          <p>{subName}</p>
        </div>
        <table className="productTable">
          <thead />
          <tbody>
            <tr className="productPrice">
              <td>판매가</td>
              <td colSpan="2" className="emphasizePrice">
                ₩ {this.changePriceToString(price)}
              </td>
            </tr>
            <tr className="productWeight">
              <td>상품무게</td>
              <td colSpan="2">{weight}</td>
            </tr>
            <tr className="productQuantity">
              <td>구매수량</td>
              <td className="countButton">
                <button
                  className="minusQuantityButton"
                  onClick={countDownQuantity}
                >
                  －
                </button>
                <span>{quantity}</span>
                <button
                  className="plusQuantityButton"
                  onClick={countUpQunatity}
                >
                  ＋
                </button>
              </td>
              <td>₩ {this.changePriceToString(updatePrice)}</td>
            </tr>
          </tbody>
          <tfoot />
        </table>
        <div className="totalPrice">
          <p>
            총 제품 금액 <span>₩ {this.changePriceToString(updatePrice)}</span>
          </p>
          <p>
            총 합계 금액 <span>₩ {this.changePriceToString(updatePrice)}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductInformation;
