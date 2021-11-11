import React, { Component } from 'react';
import './ListHeader.scss';

export class ListHeader extends Component {
  render() {
    const { listHeader } = this.props;

    return (
      <div className="listHeader">
        <img alt="listImage" src={listHeader.image} />
        <div className="visualText">
          <h1>{listHeader.name}</h1>
          <p>{listHeader.description}</p>
        </div>
      </div>
    );
  }
}

export default ListHeader;
