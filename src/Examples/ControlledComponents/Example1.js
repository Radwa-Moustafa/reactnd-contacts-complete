import React, { Component } from 'react';

class Example1 extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <p className="echo">Echo:</p>
          <p>{this.state.value}</p>
        </div>
      </div>
    );
  }
}

export default Example1;
