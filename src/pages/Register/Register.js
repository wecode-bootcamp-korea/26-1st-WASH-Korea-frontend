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
      rePassword: '',
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
    const {
      userID,
      password,
      rePassword,
      name,
      nickname,
      email,
      contact,
      address,
    } = this.state;
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
      .then(result => {
        if (result.message === 'PW_VALIDATION_ERROR') {
          alert('비밀번호를 정확하게 입력해주세요.');
        } else if (result.message === 'EMAIL_VALIDATION_ERROR') {
          alert('이메일을 정확하게 입력해주세요.');
        } else if (result.message === 'ALREADY_EXISTS_EMAIL') {
          alert('이미 존재하는 이메일 입니다.');
        } else if (result.message === 'ALREADY_EXISTS_USERNAME') {
          alert('이미 존재하는 아이디 입니다.');
        } else if (userID.length === 0) {
          alert('필수 항목을 모두 입력해주세요.');
        } else if (rePassword.length === 0) {
          alert('필수 항목을 모두 입력해주세요.');
        } else if (name.length === 0) {
          alert('필수 항목을 모두 입력해주세요.');
        } else if (contact.length === 0) {
          alert('필수 항목을 모두 입력해주세요.');
        } else {
          alert('회원 가입 성공!');
          this.goToMain();
        }
      });
  };

  distributeValueToKey = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    const { history } = this.props;
    history.push('/productList');
  };

  render() {
    const { inputList } = this.state;
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
                  distributeValueToKey={this.distributeValueToKey}
                  validator={validator[input.name]}
                  value={this.state[input.name]}
                  errorMessage={input.errorMessage}
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

const validator = {
  userID: value => value.length >= 4,
  password: value => {
    const pwRegExp =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const result = pwRegExp.test(value);
    if (result === true) {
      return true;
    }
  },
  rePassword: value => value.length >= 2,
  name: value => value.length >= 2,
  nickname: value => value.length >= 0,
  email: value => value.includes('@') && value.includes('.'),
  contact: value => value.length >= 10,
  address: value => value.length >= 0,
};
