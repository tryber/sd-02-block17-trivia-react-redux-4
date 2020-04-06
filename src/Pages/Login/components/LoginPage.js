import React from 'react';
import PropTypes from 'prop-types';
import MD5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import settingsBtn from '../../../imgs/settings.png';
import TriviaLogo from '../../../trivia.png';
import './style.css';

import { catchEmail } from '../../../actions/gravatarAction';
import { addNameAndEmail } from '../../../actions/questions';
import { thunkQuestions, thunkToken, getQuestionsAction } from '../../../actions';


class LoginPage extends React.Component {
  static renderSettingsButton() {
    return (
      <div>
        <Link to="/settings">
          <i className="settingsBtn" data-testid="config-button">
            <img className="settingsIcon" src={settingsBtn} alt="settings icon" />
          </i>
        </Link>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTokenQuestions = this.generateTokenQuestions.bind(this);
  }

  generateTokenQuestions() {
    const { email, username } = this.state;
    const {
      importedGravatarReducer,
      setName,
      questions,
      getUserToken,
      importedQuestionThunk,
      difficulty,
      category,
      type,
    } = this.props;
    const token = localStorage.getItem('token');
    importedGravatarReducer(MD5(email).toString(), email);
    if (questions.response_code === 3) {
      getUserToken()
        .then((token) => {
          localStorage.setItem('token', token);
          return (importedQuestionThunk(token, category, difficulty, type));
        });
    } else {
      localStorage.setItem('token', token);
      importedQuestionThunk(token, category, difficulty, type);
    }
    setName(username);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderLoginSection() {
    return (
      <div className="login_campo">
        <label htmlFor="email">E-mail do Gravatar:</label>
        <input
          id="email"
          name="email"
          type="text"
          data-testid="input-gravatar-email"
          placeholder="Insira seu e-mail Gravatar"
          onChange={(event) => this.handleChange(event)}
        />
        <label htmlFor="name">Nome do Jogador:</label>
        <input
          id="name"
          name="username"
          type="name"
          data-testid="input-player-name"
          placeholder="Insira seu nome"
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }

  renderJogarButton() {
    const { username, email } = this.state;
    let disabled = false;
    if (username === '' || email === '') {
      disabled = true;
    }
    return (
      <div className="btn-div">
        <Link to="/game">
          <button
            type="button"
            className="btn-jogar"
            data-testid="btn-play"
            disabled={disabled}
            onClick={() => this.generateTokenQuestions()}
          >
            JOGAR!
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="settingsDiv">
          {LoginPage.renderSettingsButton()}
        </div>
        <img src={TriviaLogo} alt="TriviaLogo" className="trivia" />
        {this.renderLoginSection()}
        {this.renderJogarButton()}
      </div>
    );
  }
}

LoginPage.propTypes = {
  category: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  importedQuestionThunk: PropTypes.func.isRequired,
  getUserToken: PropTypes.func.isRequired,
  importedGravatarReducer: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  questions: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({
  gravatarReducer: { email, token },
  apiReducer: { questions },
  dropdownReducer: {
    difficulty,
    category,
    type,
  },
}) => ({
  email,
  questions,
  token,
  difficulty,
  category,
  type,
});

const mapDispatchToProps = (dispatch) => ({
  loadingDispatch: () => dispatch(getQuestionsAction()),
  importedQuestionThunk: (token, category, difficulty, type) => (
    dispatch(thunkQuestions(token, category, difficulty, type))
  ),
  getUserToken: () => dispatch(thunkToken()),
  importedGravatarReducer: (token, email) => dispatch(catchEmail(token, email)),
  setName: (name) => dispatch(addNameAndEmail(name, '')),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
