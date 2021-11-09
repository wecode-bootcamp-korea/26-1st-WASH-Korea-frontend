import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCamera } from 'react-icons/io';
import TabMenu from '../TabMenu/TabMenu';
import ProductDetailTexts from './ProductDetailTexts';
import './ProductContent.scss';

export class ProductContent extends Component {
  tabMenuDescription = React.createRef();
  tabMenuReview = React.createRef();
  tabMenuDelivery = React.createRef();

  goToTabMenu = tabmenu => {
    window.scrollTo({
      top: tabmenu.current.offsetTop - 190,
      behavior: 'smooth',
    });
  };

  render() {
    const { productName, subName, description } = this.props;

    return (
      <section className="productContent">
        <TabMenu
          goToDescriptionTab={() => {
            this.goToTabMenu(this.tabMenuDescription);
          }}
          goToReviewTab={() => {
            this.goToTabMenu(this.tabMenuReview);
          }}
          goToDeliveryTab={() => {
            this.goToTabMenu(this.tabMenuDelivery);
          }}
          datae-idx="1"
        />

        <div className="productDetailContents">
          <ProductDetailTexts
            productName={productName}
            subName={subName}
            description={description}
          />

          <TabMenu
            goToDescriptionTab={() => {
              this.goToTabMenu(this.tabMenuDescription);
            }}
            goToReviewTab={() => {
              this.goToTabMenu(this.tabMenuReview);
            }}
            goToDeliveryTab={() => {
              this.goToTabMenu(this.tabMenuDelivery);
            }}
            datae-idx="2"
          />

          <div className="productReviews" ref={this.tabMenuReview}>
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

          <TabMenu
            goToDescriptionTab={() => {
              this.goToTabMenu(this.tabMenuDescription);
            }}
            goToReviewTab={() => {
              this.goToTabMenu(this.tabMenuReview);
            }}
            goToDeliveryTab={() => {
              this.goToTabMenu(this.tabMenuDelivery);
            }}
            datae-idx="3"
          />

          <div className="productDelivery" ref={this.tabMenuDelivery}>
            <p>
              - 배송비 : 기본배송료 2,500원입니다. (도서, 산간, 오지 일부지역은
              배송비가 추가될 수 있습니다. <br />
              - 택배사 : 우체국 택배를 이용합니다. <br />
              - 배송 가능 지역: 국내배송 / 해외배송은 불가합니다. <br />
              <br />
              홈페이지에서 구매한 경우 워시코리아 홈페이지에서 구매한 제품은
              홈페이지를 통해서만 교환이 가능합니다.
              <br />
              고객님의 변심에 의한 반품일 경우상품 및 서비스를 공급받은날로부터
              7일 이내에가능하며, 미 개봉 제품만 가능합니다.
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
    );
  }
}

export default ProductContent;
