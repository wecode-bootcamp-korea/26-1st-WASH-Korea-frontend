import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { SubMenu } from './Components/SubMenu';
import { MENUS, PRODUCT_SUB_MENUS } from './NavData';
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
              {MENUS.map((menu, idx) => {
                const isProductMenu = !(menu === '제품');

                return (
                  <li
                    key={idx}
                    onMouseEnter={() => {
                      this.onUpdateVisible(isProductMenu);
                    }}
                  >
                    <Link to="/">{menu}</Link>
                  </li>
                );
              })}
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
