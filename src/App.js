import React from 'react';
import './App.css';
import TimeFormat from 'hh-mm-ss'

export default class App extends React.Component {
  constructor (props) { 
    super (props) 
    this.state = { 
      time: 0, 
      isActive: false,
}
startTimer = () => {
  this.setState ({ 
    isActive : true
  }) 
  this.intervalID = setInterval (() => {this.setState({time: this.state.time+1})},1000)
} 

stopTimer = () => {
  this.setState ({isActive: false}) 
  clearInterval(this.intervalID)
}

resetTimer = () => {
  clearInterval(this.intervalID)
  this.setState ({time: 0, isActive: false})
} 
  render() {
  return (
          <div className="App">
              <header className="App-header">
                <div>
                  <div className="time">
                    {TimeFormat.fromS(this.state.time, 'hh:mm:ss')}
                  </div>
                  <div className="title">
                    <span>Hour</span>
                    <span>Minute</span>
                    <span>Second</span>
                  </div>
                </div>
                <div className="btn">
                  <button type="button" class="btn btn-outline-primary" 
                    onClick={(!this.state.isActive)?
                    this.startTimer:this.stopTimer}>Start
                  </button>
                  <button type="button" class="btn btn-outline-dark"
                    onClick={this.resetTimer}>Reset</button>
                </div>
              </header>
        </div>
        )
  };
}
