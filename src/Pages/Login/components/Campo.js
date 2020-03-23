import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Campo extends Component {
  componentDidMount() {
    
  }

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


Campo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
