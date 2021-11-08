import React, { Component } from 'react';
import './ListMenu.scss';

export class ListMenu extends Component {
  changeCategory = id => {
    this.props.changeMenu(id);
  };

  render() {
    const { menuDataDetail, menuData } = this.props;

    return (
      <article className="listMenu">
        <div className="listTitle">
          <h2>{menuDataDetail.name}</h2>
          <select name="sort">
            <option value="추천순">추천순</option>
            <option value="낮은가격순">낮은가격순</option>
            <option value="높은가격순">높은가격순</option>
          </select>
        </div>
        <ul className="listCategory">
          {menuData.map(menu => {
            return (
              <li key={menu.id} onClick={() => this.changeCategory(menu.id)}>
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
