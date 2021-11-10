import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCamera } from 'react-icons/io';
import ProductComment from './ProductComment';

class ProductCommentLists extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      productValue: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.result.message,
        });
      });
  }

  render() {
    const { productList, productValue } = this.state;

    return (
      <div className="productComment">
        <ul>
          {productList.map(comment => {
            return (
              <ProductComment
                key={comment.proudct_id}
                username={comment.user_name}
                comment={comment.content}
                stars={comment.rating}
                commentImages={comment.image}
              />
            );
          })}
        </ul>
        <div className="productCommentInput">
          <form className="CommentsForm">
            <textarea
              name="comments"
              className="comments"
              cols="30"
              rows="15"
              value={productValue}
            />
            <div className="commentButton">
              <Link to="/" className="photoReviewButton">
                <IoMdCamera className="photoReview" />
              </Link>
              <button className="writeCommentButton">후기작성</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductCommentLists;
