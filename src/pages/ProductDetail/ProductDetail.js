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
              <h2>몬틸노바</h2>
              <p>#샴푸바 #풍성한 거품 </p>
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
                  <td colspan="2" className="emPrice">
                    ₩ 52,000
                  </td>
                </tr>
                <tr className="productWeight">
                  <td>상품무게</td>
                  <td colspan="2">100g</td>
                </tr>
                <tr className="productQuantity">
                  <td>구매수량</td>
                  <td className="countButton">
                    <button className="minusQuantityButton">－</button>
                    <span>1</span>
                    <button className="plusQuantityButton">＋</button>
                  </td>
                  <td>₩ 52,000</td>
                </tr>
              </tbody>
              <tfoot />
            </table>
            <div className="totalPrice">
              <p>
                총 제품 금액 <span>₩ 52,000</span>
              </p>
              <p>
                총 합계 금액 <span>₩ 52,000</span>
              </p>
            </div>
          </div>
        </section>

        <div className="productButton">
          <button className="cartButton">장바구니</button>
          <button className="orderButton">주문하기</button>
        </div>

        <section className="productContent">
          <div className="tabMenu">
            <div className="tabButton">
              <ul>
                <li className="activeTabMenu">
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
          </div>
          <div className="productDetailContents">
            <div className="productDetaiDescription">
              <h2>
                <span>솝</span>레몬 제스트
                <span>Lemon Zest</span>
              </h2>
              <img
                src="https://images.unsplash.com/photo-1603533626214-9530d6fbfacf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                alt="soap detail"
              />
              <img
                src="https://images.unsplash.com/photo-1607006483702-289fb2c18218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="soap detail"
              />
              <p>
                신선한 레몬에 경쾌함을 더해 줄 레몬 머틀을 더했습니다.
                <br />
                시칠리아산 레몬 오일과 올리브, 로즈마리가 듬뿍 담긴 '몬틸노바'는
                반짝반짝 아름다운 머릿결로 가꾸는데 도움을 줍니다.
                <br />
                자, 산뜻한 세정과 반짝임을 더해줄 레몬의 슈퍼 파워를 만나볼
                시간입니다!
              </p>
              <p>TIP! 찰랑거리는 머릿결을 선사할 샴푸를 찾고 계신다면...</p>
              <br />
              <p>
                젖은 머리카락의 결을 따라 샴푸 바를 문질러 주세요. <br />
                손가락 끝으로 두피를 마사지하여 거품을 내어준 뒤, 물로 깨끗하게
                씻어내 줍니다.
                <br />
                <br />
                <span class="productTagName">
                  #쓰레기없데이 #비건샴푸 #샴푸바 #고체샴푸 #비건화장품
                  #몬틸노바
                </span>
              </p>
              <img
                src="https://images.unsplash.com/photo-1603533627277-11d5a361ac8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="soap detail image"
              />
            </div>
            <div className="tabMenu">
              <div className="tabButton">
                <ul>
                  <li>
                    <Link to="/">상품상세정보</Link>
                  </li>
                  <li className="activeTabMenu">
                    <Link to="/">상품후기</Link>
                  </li>
                  <li>
                    <Link to="/">배송/교환 및 반품안내</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="productReviews">
              <h2>
                Product Reviews <span>★★★★★ 1</span>
              </h2>
              <p>나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
              <form className="CommentsForm">
                <textarea
                  name="comments"
                  className="comments"
                  cols="30"
                  rows="15"
                />
                <div className="commentButton">
                  <Link to="/" className="photoReviewButton">
                    <IoMdCamera className="photoReview" />
                  </Link>
                  <button className="writeCommentButton">후기작성</button>
                </div>
              </form>
            </div>
            <div className="tabMenu">
              <div className="tabButton">
                <ul>
                  <li>
                    <Link to="/">상품상세정보</Link>
                  </li>
                  <li>
                    <Link to="/">상품후기</Link>
                  </li>
                  <li className="activeTabMenu">
                    <Link to="/">배송/교환 및 반품안내</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="productDelivery">
              <p>
                - 배송비 : 기본배송료 2,500원입니다. (도서, 산간, 오지
                일부지역은 배송비가 추가될 수 있습니다. <br />
                - 택배사 : 우체국 택배를 이용합니다. <br />
                - 배송 가능 지역: 국내배송 / 해외배송은 불가합니다. <br />
                <br />
                홈페이지에서 구매한 경우 워시코리아 홈페이지에서 구매한 제품은
                홈페이지를 통해서만 교환이 가능합니다.
                <br />
                고객님의 변심에 의한 반품일 경우상품 및 서비스를
                공급받은날로부터 7일 이내에가능하며, 미 개봉 제품만 가능합니다.
                <br />
                <br />
                고객센터로 반품 접수를 받고 있으며,지정 택배사를 이용하여 상품
                회수 후교환/반품 여부에 관한 안내가 이루어집니다.
                <br />
                <br />
                * 고객변심으로 인한 교환시 초도 택배 비용을 포함한 반품 택배
                비용이 부과됩니다.
                <br />
                * 상품 결합으로 인한 교환의 경우 러쉬코리아에서 택배비용을
                부담합니다.
                <br />
                * 택배비용은 무통장 입금을 통해서만 결제 가능합니다.
                <br />
                * 교환 상품에 스마트 샘플 또는 깜짝 선물이 있는 경우, 함께
                반품하여야 교환이 진행됩니다.
                <br />* 프레쉬 마스크를 포함하여 냉장배송을 받은 제품은 교환이
                불가합니다.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProductDetail;
