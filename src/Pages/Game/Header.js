import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Header.css';

import { addNameAndEmail } from '../../actions/questions';

const generateimage = (email, setNameAndEmail, name) => {
  const gravatarURL = 'https://www.gravatar.com/avatar/';
  setNameAndEmail(name, `${gravatarURL}${email}`);
  return (
    <img src={`${gravatarURL}${email}`} alt="Gravatar" />
  );
};

const Header = ({
  score, email, setNameAndEmail, name = 'Julio',
}) => (
  <header className="header-content">
    {generateimage(email, setNameAndEmail, name)}
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
    email,
  },
  questionReducer: {
    player: {
      score,
    },
  },
}) => ({
  email,
  score,
});

const mapDispatchToProps = (dispatch) => ({
  setNameAndEmail: (name, email) => dispatch(addNameAndEmail(name, email)),
});

Header.propTypes = {
  score: propTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
