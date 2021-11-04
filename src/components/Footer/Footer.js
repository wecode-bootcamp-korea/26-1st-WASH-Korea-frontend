import React, { Component } from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import { Info } from './FooterInfo/FooterData.js';
import './Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerWrapper">
          <div className="subWrapLeft">
            <img className="logo" alt="WASH logo" src="../images/logo.png" />
            <div className="customerService">
              <div className="csInfo">
                <span className="csName">고객센터</span>
                <span className="csNumber">5308-1013</span>
                <div className="csEmail">cswash@wecode.co.kr</div>
                <div className="csTime">
                  <p>상담전화 13:00~17:00(평일)</p>
                  <p className="talkOperationTime">상담톡 10:00~17:00(평일)</p>
                </div>
              </div>
              <div className="order">
                <div className="orderInfo">
                  <span>기업선물</span>
                  <span className="orderNumber">070-5308-1013</span>
                </div>
                <div className="orderEmail">orderwash@wecode.co.kr</div>
              </div>
              <div className="snsIcon">
                <div className="iconWrapper">
                  <RiFacebookFill className="icon" />
                </div>
                <div className="iconWrapper">
                  <FiInstagram className="icon" />
                </div>
                <div className="iconWrapper">
                  <FaYoutube className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="subWrapRight">
            <ul className="footerNav">
              {Info.map(footernav => {
                return (
                  <li key={footernav.id} className="footerNavList">
                    {footernav.content}
                  </li>
                );
              })}
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
                서울특별시 강남구 테헤란로 427 (위워크타워) 10층 | 사이트 운영자
                : 주식회사 워시코리아 | 대표이사 : 권은경, 박보라, 석예주,
                이수경, 허규빈
              </p>
              <p className="bizInfo">
                사업자 등록번호 : 530-81-01310 사업자정보확인 | 교육서비스업
                등록번호 : 제 13227 호 | 개인정보보호책임자 : 이수경
              </p>
            </div>
            <div className="copyright">
              Copyright © 2019. Gracefulrain Co., Ltd.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
