import React, { Component } from 'react';
import Inputs from './Inputs';
import './Register.scss';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      inputList: [],
      userID: '',
      password: '',
      name: '',
      nickname: '',
      email: '',
      contact: '',
      address: '',
    };
  }

  componentDidMount() {
    fetch('./Data/InputList.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          inputList: res,
        });
      });
  }

  submitForm = () => {
    const { userID, password, name, nickname, email, contact, address } =
      this.state;
    fetch('http://10.58.2.138:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        user_name: userID,
        password: password,
        name: name,
        nickname: nickname,
        email: email,
        contact: contact,
        address: address,
      }),
    })
      .then(res => res.json())
      .then(result => console.log('결과: ', result.ACCESS_TOKEN));
  };

  temp = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // checkEmail = e => {
  //   console.log('checkemail >>> ', e);
  //   this.setState({
  //     email: e.target.value,
  //   });
  // };

  goToMain = () => {
    const { history } = this.props;
    history.push('/productList');
  };

  render() {
    const { inputList } = this.state;
    // const checkEmailValidation = email.includes('@') && email.includes('.');
    return (
      <main className="register">
        <div className="registerBox">
          <div className="header">
            <div className="joinUs">JOIN US</div>
            <div className="inputInfo">정보입력</div>
          </div>
          <div className="titleBar">
            <div className="title">기본정보</div>
            <div className="titleRight">
              <span className="smallSquare">▪</span> 표시는 반드시 입력하셔야
              하는 항목입니다.
            </div>
          </div>
          <form className="formList">
            {inputList.map(input => {
              return (
                <Inputs
                  key={input.id}
                  name={input.name}
                  content={input.content}
                  inputType={input.inputType}
                  isNecessary={input.isNecessary}
                  placeholder={input.placeholder}
                  temp={this.temp}
                  // checkEmail={this.checkEmail}
                />
              );
            })}
          </form>
          <div className="registerBtnWrapper">
            <button
              className="registerBtn"
              type="button"
              onClick={this.submitForm}
            >
              회원가입
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Register;
