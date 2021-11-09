import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TabMenu extends Component {
  render() {
    const { goToDescriptionTab, goToReviewTab, goToDeliveryTab } = this.props;

    return (
      <div className="tabMenu">
        <div className="tabButton">
          <ul>
            <li
              onClick={() => {
                goToDescriptionTab();
              }}
            >
              <Link to="/">상품상세정보</Link>
            </li>
            <li
              onClick={() => {
                goToReviewTab();
              }}
            >
              <Link to="/">상품후기</Link>
            </li>
            <li
              onClick={() => {
                goToDeliveryTab();
              }}
            >
              <Link to="/">배송/교환 및 반품안내</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TabMenu;
