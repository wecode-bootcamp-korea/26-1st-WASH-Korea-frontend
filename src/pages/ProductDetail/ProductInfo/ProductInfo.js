import React, { Component } from 'react';

export class ProductInfo extends Component {
  changePriceToString = price => {
    let priceArr = price.toString().split('');
    return (
      priceArr.slice(0, priceArr.length - 3).join('') +
      ',' +
      priceArr.slice(priceArr.length - 3, priceArr.length).join('')
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
            <option value="shower">샤워</option>
            <option value="body">바디</option>
            <option value="face">페이스</option>
            <option value="hair">헤어</option>
          </select>

          <label htmlFor="categoryName"> &gt; </label>
          <select name="categoryName" id="categoryName">
            <option value="shower">샴푸</option>
            <option value="body">비누</option>d
            <option value="face">샤워젤</option>
            <option value="hair">배쓰 밤</option>
            <option value="supplies">용품</option>
          </select>
        </form>

        <div className="productName">
          <h2>{productName}</h2>
          <p>{subName}</p>
        </div>
        <table className="productTable">
          <colgroup>
            <col width="16%" />
            <col width="28%" />
            <col width="56%" />
          </colgroup>

          <thead />
          <tbody>
            <tr className="productPrice">
              <td>판매가</td>
              <td colSpan="2" className="emPrice">
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

export default ProductInfo;
