import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { thunkQuestions } from '../../Actions';

class Game extends Component {
  componentDidMount() {
    const { importedThunk } = this.props;
    importedThunk();
  }

  render() {
    return (
      <div>
        <p>Game</p>
      </div>
    );
  }
}

const mapStateToProps = ({ apiReducer: { questions, fetching } }) => ({ questions, fetching });

const mapDispatchToProps = (dispatch) => ({
  importedThunk: () => dispatch(thunkQuestions()),
});

Game.propTypes = {
  importedThunk: propTypes.func.isRequired,
}


export default connect(mapStateToProps, mapDispatchToProps)(Game);
