import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { allInputsIn } from '../../../actions/Campo';
import { connect } from 'react-redux';
import settingsBtn from '../../../imgs/settings.png';
import './style.css';

class Campo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    }
  }

  handleChange(event) {
    const { name, value } = event;
    const { username, email } = this.state;
    if(username !== '' && email !== '') {
      this.setState({[name]: value, disabled: false})
    }
    this.setState({[name]: value});
  }

  isDisabled() {
    const { name, email } = this.state;
    if(name !== '' && email !== '') {
      return this.setState({ disabled: false })
    }
    return this.setState({ disabled: true })
  }

  renderLoginSection = () => {
    const { disabled } = this.state;
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
        <Link to="/game-page">
          <button className="btn-jogar" data-testid="btn-play" disabled={disabled}>JOGAR!</button>
        </Link>
      </div>
    );
  };

  renderSettingsButton = () => (
    <Link to="/settings">
      <icon className="settingsBtn" data-testid="config-button">
        <img className="settingsIcon" src={settingsBtn} alt="settings icon" />
      </icon>
    </Link>
  );

  render() {
    const { loginInputs } = this.props;
    return (
      <div className="whole-page">
        <div className="settingsDiv">
          {this.renderSettingsButton()}
        </div>
        {this.renderLoginSection(loginInputs)}
      </div>
    );
  }
}

const mapStateToProps = ({ loginInputs }) => ({
  loginInputs,
});

const mapDispatchToProps = (dispatch) => ({
  allInputsIn: (disabled) => dispatch(allInputsIn(disabled))
});

export default connect(mapStateToProps, mapDispatchToProps)(Campo);

Campo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
