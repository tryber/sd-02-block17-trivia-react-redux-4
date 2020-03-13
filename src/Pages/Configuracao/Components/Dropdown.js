import React, { Component } from 'react';

import './style.css';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdown = false;
    this.list = React.createRef();
    this.btn = React.createRef();
  }

  dropDonw(e) {
    this.dropdown = !this.dropdown;
    if (this.dropdown) {
      this.list.current.style.display = 'none';
    } else {
      this.list.current.style.display = 'flex';
    }
  }

  render() {
    return (
      <div className="comp_dropdown">
        <div className="selected">
          <button type="button" onClick={(e) => this.dropDonw(e)} ref={this.btn}>
            <i class="material-icons">
              keyboard_arrow_down
            </i>
          </button>
          <p>item</p>
        </div>
        <div className="list" ref={this.list}>
          <button type="button">item</button>
          <button type="button">item</button>
          <button type="button">item</button>
        </div>
      </div>
    );
  }
}
