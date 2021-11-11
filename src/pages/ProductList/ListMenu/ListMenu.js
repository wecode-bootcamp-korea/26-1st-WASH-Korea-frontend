import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MENU_LIST } from './ListMenuSort';
import './ListMenu.scss';

export class ListMenu extends Component {
  changeValueToQuery = select => {
    const { location, history } = this.props;
    const paramsString = new URLSearchParams(location.search);

    if (select.target.value === 'sortBasic') {
      paramsString.delete('sort');
    } else if (select.target.value === 'sortHigh') {
      paramsString.delete('sort');
      paramsString.append('sort', '-price');
    } else if (select.target.value === 'sortLow') {
      paramsString.delete('sort');
      paramsString.append('sort', 'price');
    }
    history.push(`/productlist?${paramsString.toString()}`);
  };

  changeCategory = (value, id) => {
    const { history } = this.props;

    value === 'Category'
      ? history.push(`/productlist?category=${id}`)
      : history.push(`/productlist?category=1&sub_category=${id}`);
  };

  render() {
    const { menuCategory, menuSubCategory, listHeader } = this.props;
    const { changeValueToQuery } = this;

    return (
      <div className="listMenu">
        <div className="listTitle">
          <h2>{listHeader.name}</h2>
          <select defaultValue="sortBasic" onChange={changeValueToQuery}>
            {MENU_LIST.map(menu => {
              return (
                <option key={menu.id} value={menu.value}>
                  {menu.name}
                </option>
              );
            })}
          </select>
        </div>
        <ul className="listCategory">
          <li
            onClick={() =>
              this.changeCategory('Category', menuCategory.category_id)
            }
          >
            전체 ({menuCategory.count})
          </li>
          {menuSubCategory.map(menu => {
            return (
              <li
                key={menu.sub_category_id}
                onClick={() =>
                  this.changeCategory('SubCategory', menu.sub_category_id)
                }
              >
                {menu.name} ({menu.count})
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ListMenu);
