import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import {
  addStartTimer, addTick, setStopTimer, setAddInterval,
} from '../../actions/timer';
import { addClassButton } from '../../actions/checkbox';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  async componentDidMount() {
    const { getStartTime } = this.props;
    await getStartTime();
    this.startTimer();
  }

  async tick() {
    const {
      startTick, seconds, stopTimer, setClassButton,
    } = this.props;
    await startTick();
    if (seconds <= 1) {
      stopTimer();
      clearInterval(this.interval);
      setClassButton('correct-answer', 'incorrect-answer', true);
    }
  }

  startTimer() {
    const { setStateInterval } = this.props;
    this.interval = setInterval(this.tick, 1000);
    setStateInterval(this.interval);
  }

  render() {
    const { seconds } = this.props;
    return (
      <div data-testid="timer" className="comp_timer">
        Counter:
        {seconds}
      </div>
    );
  }
}

const mapStateToProps = ({
  timerReducer: {
    seconds,
  },
}) => ({
  seconds,
});

const mapDispatchToProps = (dispatch) => ({
  setStateInterval: (interval) => dispatch(setAddInterval(interval)),
  getStartTime: () => dispatch(addStartTimer()),
  startTick: () => dispatch(addTick()),
  stopTimer: () => dispatch(setStopTimer()),
  setClassButton: (correct, incorrect, canNextButton) => (
    dispatch(addClassButton(correct, incorrect, canNextButton))
  ),
});

Timer.propTypes = {
  seconds: propTypes.number.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
