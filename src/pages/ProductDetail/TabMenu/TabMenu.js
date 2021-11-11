import React, { Component } from 'react';

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
              상품상세정보
            </li>
            <li
              onClick={() => {
                goToReviewTab();
              }}
            >
              상품후기
            </li>
            <li
              onClick={() => {
                goToDeliveryTab();
              }}
            >
              배송/교환 및 반품안내
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TabMenu;
