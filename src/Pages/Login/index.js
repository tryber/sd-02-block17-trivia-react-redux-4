import React, { Component } from 'react';

import Campo from './components/Campo';

import './style.css';

export default class Login extends Component {
  render() {
    return (
      <div className="page_login">
        <div className="content">
          <Campo name={'Email do Gravatar:'} type={'email'} />
          <Campo name={'Nome do jogador:'} type={'text'} />
          <button type="button">JOGAR!</button>
        </div>
      </div>
    );
  }
}
