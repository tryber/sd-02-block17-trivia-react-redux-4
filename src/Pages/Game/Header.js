import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Header.css';

const generateimage = (email) => {
  const gravatarURL = 'https://www.gravatar.com/avatar/';
  return (
    <img src={`${gravatarURL}${email}`} alt="Gravatar" />
  );
};

const Header = ({ score, email }) => {

  return (
    <header className="header-content">
      {generateimage(email)}
      <h1
        data-testid="header-player-name"
        className="jogador"
      >
        Jogador: nome
      </h1>
      <h2
        data-testid="header-score"
        className="score"
      >
        Pontos:
        {score}
      </h2>
    </header>
  );
};

const mapStateToProps = ({
  gravatarReducer: {
    email,
  },
  questionReducer: {
    score,
  },
}) => ({
  email,
  score,
});

Header.propTypes = {
  score: propTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
