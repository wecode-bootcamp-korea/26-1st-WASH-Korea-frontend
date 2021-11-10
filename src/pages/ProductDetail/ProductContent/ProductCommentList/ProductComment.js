import React, { Component } from 'react';

export class ProductComment extends Component {
  render() {
    // const {} = this.props;
    return (
      <div className="productComment">
        <div className="usersinformation"></div>
        <p className="starsRating">★</p>

        <div
          className="remove"
          onClick={e => {
            // onRemove(id);
          }}
        >
          &times;
        </div>
      </div>
    );
  }
}

export default ProductComment;
