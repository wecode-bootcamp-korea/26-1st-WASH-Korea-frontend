import React from 'react';
import './Inputs.scss';

export class Inputs extends React.Component {
  inputHandle = e => {
    const { distributeValueToKey } = this.props;
    distributeValueToKey(e);
  };

  render() {
    const { isNecessary, content, name, value, inputType, placeholder } =
      this.props;
    return (
      <div className="subTitle">
        <div className="inputTitle">
          {isNecessary && <span className="smallSquare">▪</span>}
          {content}
        </div>
        <input
          className="text"
          name={name}
          value={value}
          type={inputType}
          placeholder={placeholder}
          onChange={this.inputHandle}
        />
      </div>
    );
  }
}

export default Inputs;
