import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCamera } from 'react-icons/io';

import './ProductDetail.scss';

export class ProductDetail extends Component {
  render() {
    return (
      <>
        <section className="productDetail">
          <div className="productThumbnail">
            <img
              src="https://images.unsplash.com/photo-1603533626120-2d5704173332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="soap"
            />
          </div>
          <div className="productInfo">
            <form className="categoryFiltering">
              <label htmlFor="categoryName">홈 &gt; </label>
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
                <option value="body">비누</option>
                <option value="face">샤워젤</option>
                <option value="hair">배쓰 밤</option>
                <option value="supplies">용품</option>
              </select>
            </form>
          </div>
          <div className="productName">
            <h2>몬틸노바</h2>
            <p>#샴푸바 #풍성한 거품 </p>
          </div>
          <table className="product">
            <tr className="productPrice">
              <td>
                판매가 <span>₩52,000</span>
              </td>
            </tr>
            <tr className="productWeight">
              <td>
                상품무게 <span>100g</span>
              </td>
            </tr>
            <tr className="productQuantity">
              <td>구매수량</td>
              <td>
                <button>-</button>
              </td>
              <td>
                <input type="text" />1
              </td>
              <td>
                <button>+</button>
              </td>
              <td>₩52,000</td>
            </tr>
            <tr>
              <td>
                총 제품 금액 <span>₩52,000</span>
              </td>
              <td>
                총 합계 금액 <span>₩52,000</span>
              </td>
            </tr>
          </table>
          <button className="cartButton">장바구니</button>
          <button className="ordertButton">주문하기</button>
        </section>
        <section className="productContent">
          <div className="tabMenu">
            <div className="tabButton">
              <ul>
                <li>
                  <Link to="/">상품상세정보</Link>
                </li>
                <li>
                  <Link to="/">상품후기</Link>
                </li>
                <li>
                  <Link to="/">배송/교환 및 반품안내</Link>
                </li>
              </ul>
            </div>
            <div className="productDetailContents">
              <div className="productDetaiDescription">
                <h2>
                  <span>솝</span>레몬 제스트
                </h2>
                <p>Lemon Zest</p>
                <img
                  src="https://images.unsplash.com/photo-1603533626214-9530d6fbfacf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  alt="soap detail image"
                />
                <img
                  src="https://images.unsplash.com/photo-1607006483702-289fb2c18218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="soap detail image"
                />
                <p>
                  신선한 레몬에 경쾌함을 더해 줄 레몬 머틀을 더했습니다.
                  <br />
                  시칠리아산 레몬 오일과 올리브, 로즈마리가 듬뿍 담긴
                  '몬틸노바'는 반짝반짝 아름다운 머릿결로 가꾸는데 도움을
                  줍니다.
                  <br />
                  자, 산뜻한 세정과 반짝임을 더해줄 레몬의 슈퍼 파워를 만나볼
                  시간입니다!
                </p>
                <p>TIP! 찰랑거리는 머릿결을 선사할 샴푸를 찾고 계신다면...</p>
                <h3>사용 방법</h3>
                <p>
                  젖은 머리카락의 결을 따라 샴푸 바를 문질러 주세요. <br />
                  손가락 끝으로 두피를 마사지하여 거품을 내어준 뒤, 물로
                  깨끗하게 씻어내 줍니다.
                  <span>
                    #쓰레기없데이 #비건샴푸 #샴푸바 #고체샴푸 #비건화장품
                    #몬틸노바
                  </span>
                </p>
                <img
                  src="https://images.unsplash.com/photo-1603533627277-11d5a361ac8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="soap detail image"
                />
              </div>
              <div className="productReviews">
                <h2>
                  Product Reviews ★★★★★<span>리뷰개수</span>
                </h2>
                <p>나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
                <form>
                  <textarea
                    name="comments"
                    className="comments"
                    cols="30"
                    rows="10"
                  />
                  <div className="commentButton">
                    <Link to="/">
                      <IoMdCamera />
                    </Link>
                    <button className="writeCommentButton">후기 작성</button>
                  </div>
                </form>
              </div>
              <div className="productDelivery">
                <p>
                  - 배송비 : 기본배송료 2,500원입니다. (도서, 산간, 오지
                  일부지역은 배송비가 추가될 수 있습니다. <br />
                  택배사 : 우체국 택배를 이용합니다. <br />
                  배송 가능 지역: 국내배송 / 해외배송은 불가합니다. <br />
                  <br />
                  홈페이지에서 구매한 경우 워시코리아 홈페이지에서 구매한 제품은
                  홈페이지를 통해서만 교환이 가능합니다.
                  <br />
                  고객님의 변심에 의한 반품일 경우상품 및 서비스를
                  공급받은날로부터 7일 이내에가능하며, 미 개봉 제품만
                  가능합니다.
                  <br />
                  <br />
                  고객센로 반품 접수를 받고 있으며,지정 택배사를 이용하여 상품
                  회수 후교환/반품 여부에 관한 안내가 이루어집니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProductDetail;
