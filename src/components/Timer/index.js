import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    const { startValue } = this.props;
    this.state = {
      time: startValue,
    };
    this.chronometer = null;
    this.stopInterval = this.stopInterval.bind(this);
  }

  componentDidMount() {
    this.startChronometer();
  }

  startChronometer() {
    const INTERVAL = 1000;

    this.chronometer = setInterval(() => {
      const { time } = this.state;
      if (time === 0) {
        this.stopInterval();
      } else {
        this.setState((state) => ({
          time: state.time - 1,
        }));
      }
    }, INTERVAL);
  }

  stopInterval() {
    clearInterval(this.chronometer);
  }

  render() {
    const { time } = this.state;

    return (<div className="timer">{`${time}s`}</div>);
  }
}
