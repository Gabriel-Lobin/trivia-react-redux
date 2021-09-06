import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSeconds, stopCronometer } from '../../redux/actions/index';

class Timer extends Component {
  constructor(props) {
    super(props);
    const { startValue } = this.props;
    this.state = {
      time: startValue,
    };
  }

  startChronometer() {
    const INTERVAL = 1000;    
    this.chronometer = setInterval(() => {
      const { updateSecond, time } = this.props;
      if (time > 0) { updateSecond() }
      else {
        clearInterval(this.chronometer);
      }
    }, INTERVAL);
  }

  async cronometer() {
    const { stopCronometer } = this.props;
    await stopCronometer();
    await this.startChronometer();
  };

  render() {
    const { test } = this.state;
    const { time, timer } = this.props;
    { timer && this.cronometer() }
    return (
      <div className="timer">{`${time}s`}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.questions.time,
  timer: state.questions.timer,
});

const mapDispatchToProps = (dispatch) => ({
  updateSecond: () => dispatch(updateSeconds()),
  stopCronometer: () => dispatch(stopCronometer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

