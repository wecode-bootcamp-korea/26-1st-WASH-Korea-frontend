import React from 'react';
import './Inputs.scss';

export class Inputs extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  inputHandle = e => {
    const { value } = e.target;
    const { temp } = this.props;
    this.setState({
      value: value,
    });
    temp(e);
  };

  // checkEmail = e => {
  //   const { checkEmail } = this.props;
  //   checkEmail(e);
  // };

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
          // onKeyUp={this.checkEmail}
        />
      </div>
    );
  }
}

export default Inputs;
