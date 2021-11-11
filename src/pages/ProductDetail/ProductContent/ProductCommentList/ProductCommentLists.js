import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IoMdCamera } from 'react-icons/io';
import ProductComment from './ProductComment';

class ProductCommentLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      content: '',
      image: 'https://topclass.chosun.com/news_img/1807/1807_008_1.jpg',
      rating: 5,
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    fetch(`http://10.58.2.138:8000/reviews?product_id=${productId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.result,
        });
      });
  }

  addReviewComments = id => {
    const { content, image, rating } = this.state;
    fetch('http://10.58.2.138:8000/reviews', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: id,
        content: content,
        image: image,
        rating: rating,
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          content: data.content,
          image: data.image,
          rating: data.rating,
        });
        if (data.message === 'SUCCESS') {
          this.viewReviewComments(id);
        }
      });
  };

  viewReviewComments = (id, input) => {
    fetch(`http://10.58.2.138:8000/reviews?product_id=${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.result,
          content: input,
        });
      });
  };

  //추가 구현예정
  // removeReviewComments = () => {
  //   const { productId } = this.props;
  //   fetch(`http://10.58.2.138:8000/reviews/review_id`, {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.cJyUeizTwoBYNDXiZcxyd1tFfQuKm25LZJmlzQbIduE',
  //     },
  //     body: JSON.stringify({}),
  //   })
  //     .then(res => res.json())
  //     .then(data => productList.filter());
  // };

  handleChangeReviewInput = e => {
    this.setState({ content: e.target.value });
  };

  onCreate = (id, productValue) => {
    const { productList, rating } = this.state;
    this.setState({
      productList: productList.concat({
        product_id: id,
        user_name: productList.user_name,
        created_at: productList.created_at,
        image: productList.image,
        rating: rating,
        content: productValue,
      }),
    });
  };

  render() {
    const { productList, content } = this.state;
    const { productId } = this.props;

    return (
      <div className="productCommentLists">
        <div className="productCommentInput">
          <div className="CommentsForm">
            <label>
              <textarea
                name="comments"
                className="comments"
                cols="30"
                rows="10"
                value={content}
                onChange={this.handleChangeReviewInput}
              />
            </label>
            <div className="commentButton">
              <Link to="/" className="photoReviewButton">
                <IoMdCamera className="photoReview" />
              </Link>
              <button
                type="button"
                className="writeCommentButton"
                onClick={e => {
                  e.preventDefault();
                  this.addReviewComments(productId);
                  this.onCreate(productId, content);
                }}
              >
                후기작성
              </button>
            </div>
          </div>
        </div>
        {productList.map(review => {
          return (
            <ProductComment
              key={review.review_id}
              userName={review.user_name}
              rating={review.rating}
              content={review.content}
              image={review.image}
              timeStamp={review.created_at}
              updateTimeStamp={review.update_at}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(ProductCommentLists);
