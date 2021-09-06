import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSeconds, stopCronometer } from '../../redux/actions/index';

class Timer extends Component {
  startChronometer() {
    const INTERVAL = 1000;
    this.chronometer = setInterval(() => {
      const { updateSecond, time } = this.props;
      if (time > 0) {
        updateSecond();
      } else {
        clearInterval(this.chronometer);
      }
    }, INTERVAL);
  }

  cronometer() {
    const { stopCronometerTime } = this.props;
    clearInterval(this.chronometer);
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
  stopCronometerTime: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  timer: PropTypes.bool.isRequired,
  updateSecond: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  time: state.questions.time,
  timer: state.questions.timer,
});

const mapDispatchToProps = (dispatch) => ({
  updateSecond: () => dispatch(updateSeconds()),
  stopCronometerTime: () => dispatch(stopCronometer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
