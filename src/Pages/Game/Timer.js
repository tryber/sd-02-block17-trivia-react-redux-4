import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { addReset, addCounter } from '../../actions/timer';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.myTimer = this.myTimer.bind(this);
  }

  componentDidMount() {
    this.myTimer();
  }

  componentDidUpdate() {
    const { getReset, counter } = this.props;
    if (counter === 10) {
      getReset();
      this.myTimer();
    }
  }

  myTimer() {
    const { getAddCounter, counter } = this.props;
    setTimeout(() => {
      if (counter > 1) {
        this.myTimer();
        getAddCounter(1);
      }
    }, 1000);
  }

  render() {
    const { counter } = this.props;
    return (
      <div className="comp_timer">
        <p>
          Counter:
          <span>
            {counter}
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.timerReducer.counter,
});

const mapDispatchToProps = (dispatch) => ({
  getReset: () => dispatch(addReset()),
  getAddCounter: (counter) => dispatch(addCounter(counter)),
});

Timer.propTypes = {
  counter: propTypes.number.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
