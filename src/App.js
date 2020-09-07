import React from "react";
import "./App.css";
import Cockpit from "./Components/Cockpit";
import Todolist from "./Components/Todolist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      todo: [],
      currentName: {
        name:null,
        key:null
      },
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

  addTodo = () => {
    let prevName = this.state.todo;
    let newName = this.state.currentName;
    prevName.push(newName)
    this.setState({
      todo:prevName
    })
  };

  deleteTodoHandler=(key)=>{
   var index= this.state.todo.findIndex((desc)=>{
     return (desc.key===key)
    })
    var newTodo=[...this.state.todo]
    newTodo.splice(index,1)
    this.setState({
      todo:newTodo
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>This is a Sample Todo App</h1>
          <Cockpit
            inputValue={this.nameChangeHandler}
            addTodo={this.addTodo}
          ></Cockpit>
          <Todolist todo={this.state.todo} deleteTodoHandler={this.deleteTodoHandler}></Todolist>
        </div>
      </div>
    );
  }
}

export default App;
