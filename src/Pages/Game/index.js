import React, { Component } from 'react';
import { connect } from 'react-redux';
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


export default connect(mapStateToProps, mapDispatchToProps)(Game);
