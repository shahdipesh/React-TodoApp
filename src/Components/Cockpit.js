import React, { Component } from "react";

export default class Cockpit extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  inputChangeHandler = (e) => {
    this.props.inputValue(e.target.value);
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.inputRef}
          placeholder="Please enter a Task"
        ></input>
        <button
          onClick={() => {
            this.props.addTodo(this.inputRef.current.value);
            this.inputRef.current.value = null;
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
