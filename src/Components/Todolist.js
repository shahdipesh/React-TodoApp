import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {

    let styles={
        color: "Blue",
        width: "400px",
        margin: "auto",
        textAlign: "left",
        marginTop: "20px",
        paddingBottom: "10px",
    }
    

    return (
        <div style={styles}>
             {
        props.todo.map((todoItem,index)=>{
              return (
              <ul key={Math.random()*100}>
              <Todo todoItem={todoItem} delete={()=>props.deleteTodoHandler(index)} key={Math.random()*1000}></Todo>
              </ul>
              )
            })
          }
        </div>
    )
}
