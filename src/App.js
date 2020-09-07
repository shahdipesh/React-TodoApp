import React from "react";
import "./App.css";
import Cockpit from "./Components/Cockpit";
import Todolist from "./Components/Todolist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      todo: []
    };
  }

  nameChangeHandler = (name) => {
    this.setState({
      currentName:{
        name:name,
        key:Math.random()*1000
      }
    });
  };

  addTodo = (todo) => {
    let prevName = this.state.todo;
    let newName = todo;
    prevName.push(newName)
    this.setState({
      todo:prevName
    })
  };

  deleteTodoHandler=(index)=>{
  var list = [...this.state.todo]
  list.splice(index,1)
  this.setState({
    todo: list
  })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>This is a Sample Todo App</h1>
          <Cockpit
            addTodo={this.addTodo}
          ></Cockpit>
          <Todolist todo={this.state.todo} deleteTodoHandler={(index)=>this.deleteTodoHandler(index)}></Todolist>
        </div>
      </div>
    );
  }
}

export default App;
