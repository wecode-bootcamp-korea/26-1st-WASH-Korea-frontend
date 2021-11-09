import React, { Component } from 'react';
import './Login.scss';

export class Login extends Component {
  render() {
    return (
      <main className="login">
        <div className="loginBox">
          <div className="title">로그인</div>
          <ul className="memberCheck">
            <li className="member">회원</li>
            <li className="nonMember">비회원</li>
          </ul>
          <div className="inputBox">
            <form className="input">
              <input className="inputId" type="text" placeholder="아이디" />
              <input
                className="inputPw"
                type="password"
                placeholder="비밀번호"
              />
            </form>
          </div>
          <div className="checkBox">
            <input className="saveId" type="checkbox" />
            <label for="saveId">아이디 저장</label>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
