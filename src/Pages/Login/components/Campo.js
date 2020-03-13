import React, { Component } from 'react';

import './style.css';

export default class Campo extends Component {
  render() {
    const { name, type } = this.props;
    return (
      <div className="login_campo">
        <p>{name}</p>
        <input type={type} />
      </div>
    );
  }
}
