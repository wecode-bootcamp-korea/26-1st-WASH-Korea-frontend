import React, { Component } from 'react';
import './ListMenu.scss';

export class ListMenu extends Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/listMenu.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data,
        });
      });
  }
  render() {
    const { menuList } = this.state;

    return (
      <article className="listMenu">
        <div className="listTitle">
          <h2>샤워</h2>
          <select name="hero">
            <option value="신제품순">신제품순</option>
            <option value="낮은가격순">낮은가격순</option>
            <option value="높은가격순">높은가격순</option>
          </select>
        </div>
        <ul className="listCategory">
          <li>전체 (30)</li>
          {menuList.map((el, i) => {
            return (
              <li key={i}>
                {el.name} ({el.quantity})
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
}

export default ListMenu;
