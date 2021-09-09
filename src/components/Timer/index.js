import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSeconds, stopCronometer, setChronometer } from '../../redux/actions/index';

import './style.css';

class Timer extends Component {
  startChronometer() {
    const INTERVAL = 1000;
    const { setChronometerInstance } = this.props;

    setChronometerInstance(
      setInterval(() => {
        const { updateSecond, time } = this.props;
        if (time > 0) {
          updateSecond();
        } else {
          clearInterval(this.chronometer);
        }
      }, INTERVAL),
    );
  }

  cronometer() {
    const { stopCronometerTime, chronometer, setChronometerInstance } = this.props;
    clearInterval(chronometer);
    setChronometerInstance(null);
    stopCronometerTime();
    this.startChronometer();
  }

  render() {
    const { time, timer } = this.props;
    if (timer) {
      this.cronometer();
    }
    return (
      <div className="timer">{`${time}s`}</div>
    );
  }
}

Timer.propTypes = {
  chronometer: PropTypes.number.isRequired,
  setChronometerInstance: PropTypes.func.isRequired,
  stopCronometerTime: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  timer: PropTypes.bool.isRequired,
  updateSecond: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  time: state.questions.time,
  timer: state.questions.timer,
  chronometer: state.timer.chronometer,
});

const mapDispatchToProps = (dispatch) => ({
  updateSecond: () => dispatch(updateSeconds()),
  stopCronometerTime: () => dispatch(stopCronometer()),
  setChronometerInstance: (chronometer) => dispatch(setChronometer(chronometer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
