import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  updateIdValue = e => {
    const { value } = e.target;
    this.setState({
      idValue: value,
    });
  };

  updatePwValue = e => {
    const { value } = e.target;
    this.setState({
      pwValue: value,
    });
  };

  submitLoginForm = () => {
    const { idValue, pwValue } = this.state;
    fetch('http://10.58.2.138:8000/signin', {
      method: 'POST',
      body: JSON.stringify({
        user_name: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(result => console.log('결과: ', result.ACCESS_TOKEN));
  };

  goToMain = () => {
    const { history } = this.props;
    history.push('/MainSg');
  };

  render() {
    return (
      <main className="login">
        <div className="loginBox">
          <div className="title">로그인</div>
          <div className="inputBox">
            <form className="input">
              <input
                className="inputId"
                type="text"
                placeholder="아이디"
                onChange={this.updateIdValue}
              />
              <input
                className="inputPw"
                type="password"
                placeholder="비밀번호"
                onChange={this.updatePwValue}
              />
            </form>
          </div>
          <div className="checkBox">
            <input className="saveId" type="checkbox" />
            <label for="saveId">아이디 저장</label>
          </div>
          <button
            className="loginButton"
            type="button"
            onClick={this.submitLoginForm}
          >
            로그인
          </button>
          <div className="loginMenu">
            <Link to="/register">
              <button className="registerButton">회원가입</button>
            </Link>
            <button className="findLoginInfo">아이디 찾기</button>
            <button className="findLoginInfo">비밀번호 찾기</button>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
