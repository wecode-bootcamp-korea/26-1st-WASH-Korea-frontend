import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SubMenu extends Component {
  render() {
    const { sub } = this.props;

    return (
      <ul className="depth02">
        {sub.map((value, idx) => {
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
