import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { score } = this.props;
    return (
      <header className="header-content">
        <h1>Jogador: nome</h1>
        <h2>Pontos: {score}</h2>
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
})

export default connect(mapStateToProps)(Header);
