import React, { Component } from "react";

class Counter extends Component {
  // state bu o'zgaruvchilarimizni saqlab turadigan object
  state = {
    count: 0,
  };
  getBadgeClass() {
    let className = "badge m-2 bg-";
    className += this.state.count === 0 ? "warning" : "danger";
    return className;
  }
  handleEcrement = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
    });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 }, () => {
      console.log(this.state.count);
    });
  };
  render() {
    return (
      <>
        <button onClick={this.state.count !== 0 ? this.handleDecrement : null} className="btn btn-info m-2">
          Decrement
        </button>
        <span className={this.getBadgeClass()}>{this.state.count}</span>
        <button onClick={this.handleEcrement} className="btn btn-primary m-2">
          Increment
        </button>
      </>
    ); // this bu Counter
  }

  formatNumber() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

// state ga render og'lanadi agar state o'zgarsa render boshidan chizadi
// setstate ni Componets dan olinadi
