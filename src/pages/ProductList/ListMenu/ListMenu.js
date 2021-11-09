import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SELECT from './ListMenuSort';
import './ListMenu.scss';

export class ListMenu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  selectChange = select => {
    select.target.value === 'sortBasic' && console.log('sortBasic');
    select.target.value === 'sortHigh' && console.log('sortHigh');
    select.target.value === 'sortLow' && console.log('sortLow');
  };

  changeCategory = (value, id) => {
    value === 'Category'
      ? this.props.history.push(`/productlist?category=${id}`)
      : this.props.history.push(`/productlist?category=1&sub_category=${id}`);
  };

  render() {
    const { menuCategory, menuSubCategory, listHeader } = this.props;

    return (
      <article className="listMenu">
        <div className="listTitle">
          <h2>{listHeader.name}</h2>
          <select onChange={this.selectChange}>
            {SELECT.map(menu => {
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
      </article>
    );
  }
}

export default withRouter(ListMenu);
