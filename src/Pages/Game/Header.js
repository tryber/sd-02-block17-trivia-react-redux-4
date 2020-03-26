import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    const { score } = this.props;
    return (
      <header className="header-content">
        <h1 className="jogador">Jogador: nome</h1>
        <h2 className="score">
          Pontos:
          {score}
        </h2>
      </header>
    );
  }
}

const mapStateToProps = ({
  questionReducer: {
    score,
  },
}) => ({
  score,
});

Header.propTypes = {
  score: propTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
