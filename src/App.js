import React from "react";
import "./App.css";
import Cockpit from "./Components/Cockpit";
import TodoList from "./Components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      todo: [],
      flag:false
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
    if (!this.state.todo.includes(todo)){
      let prevName = this.state.todo;
      let newName = todo;
      prevName.push(newName)
      this.setState({
        todo:prevName,
        flag:false
      })
    }
    else{
      this.setState({
        flag:true
      })
    }
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
          {this.state.flag?<p style={{color:"red"}}>Duplicate Entry</p> : null}
          <TodoList  todo={this.state.todo} deleteTodoHandler={(index)=>this.deleteTodoHandler(index)}></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
