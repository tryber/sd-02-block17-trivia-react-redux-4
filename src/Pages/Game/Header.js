import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Header.css';

import { addNameAndEmail } from '../../actions/questions';

const generateimage = (token, setNameAndEmail, name) => {
  const gravatarURL = 'https://www.gravatar.com/avatar/';
  setNameAndEmail(name, `${gravatarURL}${token}`);
  return (
    <img src={`${gravatarURL}${token}`} alt="Gravatar" />
  );
};

const Header = ({
  score, token, setNameAndEmail, name,
}) => (
  <header className="header-content">
    {generateimage(token, setNameAndEmail, name)}
    <h1
      data-testid="header-player-name"
      className="jogador"
    >
      Jogador:
      {name}
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

const mapStateToProps = ({
  gravatarReducer: {
    token,
  },
  questionReducer: {
    player: {
      name,
      score,
    },
  },
}) => ({
  name,
  token,
  score,
});

const mapDispatchToProps = (dispatch) => ({
  setNameAndEmail: (name, email) => dispatch(addNameAndEmail(name, email)),
});

Header.propTypes = {
  score: propTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
