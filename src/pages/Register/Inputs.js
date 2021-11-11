import React from 'react';
import './Inputs.scss';

export class Inputs extends React.Component {
  transferInputEvent = e => {
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
      validator,
    } = this.props;
    const isValid = validator(value);
    return (
      <div className="subTitle">
        <div className="inputTitle">
          {isNecessary && <span className="smallSquare">▪</span>}
          {content}
        </div>
        <div className="input">
          <input
            className={value && !isValid ? 'borderRed' : 'borderNormal'}
            name={name}
            value={value}
            type={inputType}
            placeholder={placeholder}
            errormessage={errorMessage}
            onChange={this.transferInputEvent}
          />
          {value && !isValid && (
            <span className="errorMessage">{errorMessage}</span>
          )}
        </div>
      </div>
    );
  }
}

export default Inputs;
