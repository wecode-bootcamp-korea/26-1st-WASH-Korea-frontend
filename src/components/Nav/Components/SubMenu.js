import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SubMenu extends Component {
  render() {
    const { subMenuList } = this.props;

    return (
      <ul className="SubMenu">
        {subMenuList.map((value, idx) => {
          return (
            <li key={idx}>
              <Link to="/">{value}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
