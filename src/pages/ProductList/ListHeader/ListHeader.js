import React, { Component } from 'react';
import './ListHeader.scss';

export class ListHeader extends Component {
  constructor() {
    super();
    this.state = {
      listMenu: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/listMenu.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          listMenu: data[0],
        });
      });
  }

  render() {
    const { listMenu } = this.state;
    return (
      <main className="listVisual">
        <img alt="listImage" src={listMenu.image_url} />
        <div className="visualText">
          <h1>{listMenu.name}</h1>
          <p>{listMenu.description}</p>
        </div>
      </main>
    );
  }
}

export default ListHeader;
