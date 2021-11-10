import React from 'react';
import './Inputs.scss';

export class Inputs extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  inputHandle = e => {
    const { distributeValueToKey } = this.props;
    distributeValueToKey(e);
  };

  render() {
    const {
      isNecessary,
      content,
      name,
      value,
      inputType,
      placeholder,
      errorMessage,
    } = this.props;
    const isValid = validateEmail(name);
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
          errormessge={errorMessage}
          onChange={this.inputHandle}
        />
        {!isValid && <span>{errorMessage}</span>}
      </div>
    );
  }
}

export default Inputs;
