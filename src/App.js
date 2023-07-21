import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 5 },
      { id: 4, value: 9 },
    ],
  };
  handleDelete = (deleteId) => {
    const counters = this.state.counters.filter((counter) => counter.id !== deleteId);
    this.setState({ counters });
  };
  handleReset = () => {
    let { counters } = this.state;
    counters = counters.map((counter) => ({ ...counter, value: 0 }));
    this.setState({ counters });
  };
  handleDecrement = (selectedCounter) => {
    const { counters } = this.state;
    const index = counters.indexOf(selectedCounter);
    let counter = counters[index];
    if (counter.value > 0) {
      counter.value--;
    }
    this.setState({ counters });
  };

  handleIncrement = (selectedCounter) => {
    const { counters } = this.state;
    const index = counters.indexOf(selectedCounter);
    const counter = counters[index];
    counter.value++;
    this.setState({ counters });
  };
  render() {
    const { counters } = this.state;
    return (
      <>  
        <Navbar length={counters.filter(({value}) => value > 0).length} />
        <Counters counters={counters} onReset={this.handleReset} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
      </>
    );
  }
}
