import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onMouseEnter = () => {
    this.setState({
      visible: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <nav onMouseLeave={this.onMouseLeave}>
        <div className="innerNav">
          <h1 className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="wash korea logo" />
            </Link>
          </h1>
          <div className="gnb" onMouseEnter={this.onMouseEnter}>
            <ul className="depth01">
              <li>
                <Link to="/">제품</Link>
              </li>
              <li>
                <Link to="/">워시 소개</Link>
              </li>
              <li>
                <Link to="/">매장 안내</Link>
              </li>
              <li>
                <Link to="/">이벤트</Link>
              </li>
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
              <ul className="depth02">
                <li className="subTitle">
                  <Link to="/">샤워</Link>
                </li>
                <li>
                  <Link to="/">샴푸</Link>
                </li>
                <li>
                  <Link to="/">바디워시</Link>
                </li>
                <li>
                  <Link to="/">비누</Link>
                </li>
                <li>
                  <Link to="/">배쓰 밤</Link>
                </li>
                <li>
                  <Link to="/">샤워용품</Link>
                </li>
              </ul>
              <ul className="depth02">
                <li className="subTitle">
                  <Link to="/"> 바디</Link>
                </li>
                <li>
                  <Link to="/">바디 로션</Link>
                </li>
                <li>
                  <Link to="/">바디 미스트</Link>
                </li>
                <li>
                  <Link to="/">바디 오일</Link>
                </li>
                <li>
                  <Link to="/">바디 스크럽</Link>
                </li>
              </ul>
              <ul className="depth02">
                <li className="subTitle">
                  <Link to="/">페이스</Link>
                </li>
                <li>
                  <Link to="/">폼클렌징</Link>
                </li>
                <li>
                  <Link to="/">팩</Link>
                </li>
                <li>
                  <Link to="/">스킨</Link>
                </li>
                <li>
                  <Link to="/">로션</Link>
                </li>
              </ul>
              <ul className="depth02">
                <li className="subTitle">
                  <Link to="/">헤어</Link>
                </li>
                <li>
                  <Link to="/">헤어 에센스</Link>
                </li>
                <li>
                  <Link to="/">헤어 미스트</Link>
                </li>
                <li>
                  <Link to="/">헤어 스프레이</Link>
                </li>
                <li>
                  <Link to="/">드라이 샴푸</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default Nav;
