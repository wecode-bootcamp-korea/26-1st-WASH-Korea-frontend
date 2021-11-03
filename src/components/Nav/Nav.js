import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import '../Nav/Nav.scss';

const MENU = ['제품', '워시 소개', '매장 안내', '이벤트'];
const SUB_MENU = [
  ['샤워', '샴푸', '바디워시', '비누', '배쓰 밤', '샤워용품'],
  ['바디', '바디 로션', '바디 미스트', '바디 오일', '바디 스크럽'],
  ['페이스', '폼클렌징', '팩', '스킨', '로션'],
  ['헤어', '헤어 에센스', '헤어 미스트', '헤어 스프레이', '드라이 샴푸'],
];

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onHover = visible => {
    visible
      ? this.setState({ visible: true })
      : this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;

    return (
      <nav
        onMouseLeave={() => {
          this.onHover(false);
        }}
      >
        <div className="innerNav">
          <h1 className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="wash korea logo" />
            </Link>
          </h1>
          <div
            className="gnb"
            onMouseEnter={() => {
              this.onHover(true);
            }}
          >
            <ul className="depth01">
              {MENU.map((value, idx) => (
                <li key={idx}>
                  <Link to="/">{value}</Link>
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
              {SUB_MENU.map((value, idx) => {
                return <SubMenu sub={value[idx]} i={idx} />;
              })}
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default Nav;

class SubMenu extends Component {
  render() {
    const { sub } = this.props;
    console.log(sub);
    return (
      <div className="depth02">
        {/* {this.props.map((value, idx) => {
          <li>
            <Link to="/">{value}</Link>
          </li>;
        })} */}
      </div>
    );
  }
}
