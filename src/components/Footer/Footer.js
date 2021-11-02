import React, { Component } from 'react';
import './Footer.scss';
import { RiFacebookFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerWrapper">
          <div className="subWrapLeft">
            <img className="logo" src="../images/logo.png" alt="WASH logo" />
            <div className="customerService">
              <div className="csInfo">
                <span className="csName">고객센터</span>
                <span className="csNumber">1644-2357</span>
                <div className="csEmail">webmaster@lush.co.kr</div>
                <div className="csTime">
                  <p>상담전화 13:00~16:00(평일)</p>
                  <p className="talkOperationTime">상담톡 10:00~16:00(평일)</p>
                </div>
              </div>
              <div className="order">
                <div className="orderInfo">
                  <span>기업선물</span>
                  <span className="orderNumber">070-4713-8543</span>
                </div>
                <div className="orderEmail">order@lush.co.kr</div>
              </div>
              <div className="snsIcon">
                <div className="iconWrapper">
                  <RiFacebookFill class="icon" />
                </div>
                <div className="iconWrapper">
                  <FiInstagram class="icon" />
                </div>
                <div className="iconWrapper">
                  <FaYoutube class="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="subWrapRight">
            <ul className="footerNav">
              <li className="footerNavList">스카우트</li>
              <li className="footerNavList">회사소개</li>
              <li className="footerNavList">개인정보처리방침</li>
              <li className="footerNavList">영상정보관리지침</li>
              <li className="footerNavList">이용약관</li>
              <li>고객센터</li>
            </ul>
            <div className="newsLetter">
              <form className="subscription">
                <input
                  className="emailInput"
                  placeholder="이메일 주소를 입력해 주세요."
                />
                <button className="subscriptionBtn">구독하기</button>
              </form>
              <p className="newsLetterUpText">
                매주 금요일 오후, 구독자님을 위한 제품과 브랜드 이야기를
                전해드립니다.
              </p>
              <span className="newsLetterDownText">
                구독은 언제든지 해지하실 수 있습니다.
              </span>
              <a href="https://www.lush.co.kr/" className="newsLetterPreview">
                미리보기
              </a>
            </div>
            <div className="companyInfo">
              <p className="address">
                서울특별시 서초구 서운로 138 (서초동아타워) 6층 | 사이트 운영자
                : 주식회사 러쉬코리아 | 대표이사 : 우미령
              </p>
              <p className="bizInfo">
                사업자 등록번호 : 201-81-77964 사업자정보확인 | 통신판매업
                신고번호 : 2012-서울서초-0647 | 개인정보보호책임자 : 우승용
              </p>
            </div>
            <div className="copyright">
              COPYRIGHT © LUSHKOREA CO. LTD. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
