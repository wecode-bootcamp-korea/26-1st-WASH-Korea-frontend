import React, { Component } from 'react';
import { CATEGORY } from './ListMenuData';
import './ListMenu.scss';

export class ListMenu extends Component {
  render() {
    const { productData, menuDataDetail, menuData } = this.props;

    return (
      <article className="listMenu">
        <div className="listTitle">
          <h2>{menuDataDetail.name}</h2>
          <select name="sort">
            <option value="추천순">추천순</option>
            <option value="낮은가격순">낮은가격순</option>
            <option value="높은가격순">높은가격순</option>
            <option value="신제품순">신제품순</option>
          </select>
        </div>
        <ul className="listCategory">
          {CATEGORY.map((menu, i) => {
            return (
              <li key={i}>
                {menu.name} ({menu.quantity})
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
}

export default ListMenu;
