import React, { Component } from "react";
class Counter extends Component {
  styles = {
    fontWeight: "bold",
    fontSize: 15,
  };

  // constructor() {
  //   super();
  //   this.handleIncreement = this.handleIncreement.bind(this);
  // }

  // handleIncreement = () => {
  //   this.setState({ value: this.props.counter.value+ 1 });
  // };

  render() {
    return (
      //  always pass the javascript object

      <div>
        <span style={this.styles} className={this.getBadgeType()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncreement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  // <ul>
  //   {this.state.tags.map((tag) => (
  //     <li key={tag}>{tag}</li>
  //   ))}
  // </ul>

  getBadgeType() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value > 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
