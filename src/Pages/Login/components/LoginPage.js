import React from 'react';
import PropTypes from 'prop-types';
import MD5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { catchEmail } from '../../../actions/gravatarAction';
import { thunkToken } from '../../../actions';
import settingsBtn from '../../../imgs/settings.png';
import TriviaLogo from '../../../trivia.png';
import './style.css';

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
    const { email } = this.state;
    const { importedGravatarReducer, importedTokenReducer } = this.props;
    importedGravatarReducer(MD5(email).toString());
    importedTokenReducer();
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
  importedGravatarReducer: PropTypes.func.isRequired,
  importedTokenReducer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ gravatarReducer: { email } }) => ({ email });

const mapDispatchToProps = (dispatch) => ({
  importedGravatarReducer: (email) => dispatch(catchEmail(email)),
  importedTokenReducer: () => dispatch(thunkToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
