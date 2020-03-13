import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdown = false;
    this.list = React.createRef();
    this.selected = React.createRef();
  }

  clickHandle(e) {
    this.selected.current.innerText = e.target.outerText;
    this.dropDonw();
  }

  dropDonw() {
    this.dropdown = !this.dropdown;
    if (this.dropdown) {
      this.list.current.style.display = 'none';
    } else {
      this.list.current.style.display = 'flex';
    }
  }
  renderBtn() {
    return (
      <button
        type="button"
        onClick={() => this.dropDonw()}
        ref={this.btn}
      >
        <i className="material-icons">
          keyboard_arrow_down
        </i>
        <p ref={this.selected} />
      </button>
    );
  }

  render() {
    const { options } = this.props;
    return (
      <div className="comp_dropdown">
        <div className="selected">
          {this.renderBtn()}
        </div>
        <div className="list" ref={this.list}>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={(e) => this.clickHandle(e)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
