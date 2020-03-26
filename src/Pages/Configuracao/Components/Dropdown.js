import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addSelected } from '../../../actions/dropdown';
import './style.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdown = false;
    this.list = React.createRef();
    this.selected = React.createRef();
  }

  clickHandle(e) {
    const { getSelected } = this.props;
    this.selected.current.innerText = e.target.outerText;
    getSelected(e.target.outerText);
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
    const { options, testid } = this.props;
    return (
      <div className="comp_dropdown" data-testid={testid}>
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
  getSelected: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  getSelected: (selected) => dispatch(addSelected(selected)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
