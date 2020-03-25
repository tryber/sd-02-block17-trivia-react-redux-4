import React, { Component } from 'react';

import LoginPage from './components/LoginPage';

import './style.css';

export default class Login extends Component {
  render() {
    return (
      <div className="page_login">
        <div className="content">
          <LoginPage />
        </div>
      </div>
    );
  }
}
