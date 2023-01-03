import React from "react";
import Countdown, { countdownApi, zeroPad } from 'react-countdown';

const renderer = ({ hours, minutes, seconds }) => (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
export class CountDown extends React.Component {
    countdownApi = null;
    countdownApi1 = null;
  state = { 
        time1: Date.now() + 60 * 1000 * 2,
        time2: Date.now() + 60 * 1000 * 1
    };

  handleStartClick = () => {
    this.countdownApi && this.countdownApi.start();
    this.countdownApi1 && this.countdownApi1.pause();
  };

  handlePauseClick = () => {
    this.countdownApi && this.countdownApi.pause();
    this.countdownApi1 && this.countdownApi1.start();
  };

  handleResetClick = () => {
    this.setState({ 
            time1: Date.now() + 60 * 1000 * 2 ,
            time2: Date.now() + 60 * 1000 * 1 ,
        });
  };

  handleUpdate = () => {
    this.forceUpdate();
  };

  setRef = (countdown) => {
    if (countdown) {
      this.countdownApi = countdown.getApi();
    }
  };
  setRef1 = (countdown) => {
    if (countdown) {
      this.countdownApi1 = countdown.getApi();
    }
  };

  isPaused() {
    return !!(this.countdownApi && this.countdownApi.isPaused());
  }

  isCompleted() {
    return !!(this.countdownApi && this.countdownApi.isCompleted());
  }

  render() {
    return (
      <div className="countdown">
        <div className="timer">
            <div className="item">
                <Countdown
                    key={this.state.time1}
                    ref={this.setRef}
                    date={this.state.time1}
                    onMount={this.handleUpdate}
                    onStart={this.handleUpdate}
                    onPause={this.handleUpdate}
                    onComplete={this.handleUpdate}
                    autoStart={false}
                    renderer={renderer}
                />
            </div>
            <div  className="item">
                <Countdown
                    key={this.state.time2}
                    ref={this.setRef1}
                    date={this.state.time2}
                    onMount={this.handleUpdate}
                    onStart={this.handleUpdate}
                    onPause={this.handleUpdate}
                    onComplete={this.handleUpdate}
                    autoStart={false}
                    renderer={renderer}
                />
            </div>
        </div>
        <div
            style={{
                position: 'absolute',
                bottom: 50,
                left: 30
            }}
        >
          <div>
          <button
            type="button"
            onClick={this.handleStartClick}
            // disabled={!this.isPaused() || this.isCompleted()}
            className="btn"
          >
            {this.isPaused() ? "Tiếp Tục" : "Bắt đầu"}
          </button>{' '}
          <button
            type="button"
            onClick={this.handlePauseClick}
            disabled={this.isPaused() || this.isCompleted()}
            className="btn"
          >
            Phản biện
          </button>{' '}
          <button type="button" onClick={this.handleResetClick} className="btn">
            Thực hiện lại
          </button>
          </div>
        </div>

        <div style={{
            position: 'fixed',
            bottom: 10,
            textAlign: 'center',
            width: '100%',
            fontWeight: 700,
            fontSize: 24
        }}>
            Powered By <a style={{color: 'red'}} href="zenticode.com">Zenticode</a>
          </div>
      </div>
    );
  }
}