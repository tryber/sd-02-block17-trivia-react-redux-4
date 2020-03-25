import React, { Component } from 'react';
import Campo from './components/Campo';

export default class Login extends Component {
  render() {
    return (
      <div className="page_login">
        <div className="content">
          <Campo />
        </div>
      </div>
    );
  }
}
