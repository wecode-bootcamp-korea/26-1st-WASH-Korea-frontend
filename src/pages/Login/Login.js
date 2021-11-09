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

  updateLoginValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitLoginForm = () => {
    const { idValue, pwValue } = this.state;
    fetch('http://10.58.2.138:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        user_name: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'USER_DOES_NOT_EXISTS') {
          alert('아이디 혹은 비밀번호를 다시 확인해주세요.');
        } else {
          localStorage.setItem('token', result.token);
          this.goToMain();
        }
      });
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
                name="idValue"
                type="text"
                placeholder="아이디"
                onChange={this.updateLoginValue}
              />
              <input
                className="inputPw"
                name="pwValue"
                type="password"
                placeholder="비밀번호"
                onChange={this.updateLoginValue}
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
            <button className="findId">아이디 찾기</button>
            <button className="findPw">비밀번호 찾기</button>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
