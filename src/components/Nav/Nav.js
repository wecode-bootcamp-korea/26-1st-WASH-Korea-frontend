import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { SubMenu } from './Components/SubMenu';
import '../Nav/Nav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onUpdateVisible = isVisible => {
    this.setState({ visible: !isVisible });
  };

  render() {
    const { visible } = this.state;

    return (
      <nav onMouseLeave={() => this.onUpdateVisible(true)}>
        <div className="innerNav">
          <h1 className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="wash korea logo" />
            </Link>
          </h1>
          <div className="gnbWrapper">
            <ul className="gnb">
              {MENUS.map((menu, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => {
                    menu === '제품'
                      ? this.onUpdateVisible(false)
                      : this.onUpdateVisible(true);
                  }}
                >
                  <Link to="/">{menu}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="users">
            <Link to="/">
              <HiOutlineSearch className="icon" />
            </Link>
            <Link to="/">
              <HiShoppingCart className="icon" />
            </Link>
            <Link to="/">
              <FaUserCircle className="icon" />
            </Link>
          </div>
        </div>
        {visible && (
          <div className="lnbWrapper">
            <div className="lnb">
              {PRODUCT_SUB_MENUS.map((menu, idx) => {
                return <SubMenu subMenuList={menu} key={idx} />;
              })}
            </div>
          </div>
        )}
      </nav>
    );
  }
}

const MENUS = ['제품', '워시 소개', '매장 안내', '이벤트'];

const PRODUCT_SUB_MENUS = [
  ['샤워', '샴푸', '바디워시', '비누', '배쓰 밤', '샤워용품'],
  ['바디', '바디 로션', '바디 미스트', '바디 오일', '바디 스크럽'],
  ['페이스', '폼클렌징', '팩', '스킨', '로션'],
  ['헤어', '헤어 에센스', '헤어 미스트', '헤어 스프레이', '드라이 샴푸'],
];
