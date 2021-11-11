import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class ProductComment extends Component {
  ratingStars = str => {
    const { rating } = this.props;
    return str.repeat({ rating });
  };

  render() {
    const {
      userName,
      rating,
      content,
      image,
      timeStamp,
      removeReviewComments,
    } = this.props;

    return (
      <div className="productComment">
        <div className="userInformation">
          <p className="starsRating">{'★'.repeat(rating)}</p>
          <p className="userName">{userName}</p>
          <p className="timeStamp">{timeStamp}</p>
        </div>

        <div className="userComment">
          <img src={image} alt="review_image" />
          <p className="content">{content}</p>
          <p className="recommend">추천</p>
          <p className="countRecommendation"> 0</p>
          <button className="recommendButton">추천하기</button>
        </div>

        <div className="remove" onClick={removeReviewComments}>
          &times;
        </div>
      </div>
    );
  }
}

export default withRouter(ProductComment);
