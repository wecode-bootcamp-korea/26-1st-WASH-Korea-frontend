import React, { Component } from 'react';
import './ListHeader.scss';

export class ListHeader extends Component {
  render() {
    const { menuData, menuDataDetail, product } = this.props;

    return (
      <div className="listVisual">
        <img alt="listImage" src={menuDataDetail.image_url} />
        <div className="visualText">
          <h1>{menuDataDetail.name}</h1>
          <p>{menuDataDetail.description}</p>
        </div>
      </div>
    );
  }
}

export default ListHeader;
