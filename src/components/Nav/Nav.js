import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { MENUS } from './NavData';
import '../Nav/Nav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      category: [],
    };
  }

  onUpdateVisible = isVisible => {
    this.setState({ visible: !isVisible });
  };

  componentDidMount() {
    fetch(`${API.categories}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          category: data.results,
        });
      });
  }

  render() {
    const { visible, category } = this.state;

    return (
      <nav onMouseLeave={() => this.onUpdateVisible(true)}>
        <div className="innerNav">
          <h1 className="logo">
            <Link to="/productlist?category=1">
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
            <Link to="/login">
              <FaUserCircle className="icon" />
            </Link>
          </div>
        </div>
        {visible && (
          <div className="lnbWrapper">
            <div className="lnb">
              {category.map(menu => {
                return (
                  <ul className="SubMenu" key={menu.category_id}>
                    <li key={menu.category_id}>
                      <Link to={`/productlist?category=${menu.category_id}`}>
                        {menu.category_name}
                      </Link>
                    </li>
                    {menu.sub_categories.map(subMenu => {
                      return (
                        <li key={subMenu.sub_category_id}>
                          <Link
                            to={`/productlist?category=1&sub_category=${subMenu.sub_category_id}`}
                          >
                            {subMenu.sub_category_name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    );
  }
}
