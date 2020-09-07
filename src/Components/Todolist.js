import React from 'react'
import Todo from './Todo'

export default function Todolist(props) {

    let styles={
        color: "Blue",
        width: "400px",
        margin: "auto",
        textAlign: "center",
        border: "1px solid grey",
        marginTop: "20px",
        paddingBottom: "10px",
    }
    

    return (
        <div style={styles}>
             {
        props.todo.map((todoItem)=>{
              return <Todo todoItem={todoItem.name} delete={()=>props.deleteTodoHandler(todoItem.key)} key={Math.random()*100}></Todo>
            })
          }
        </div>
    )
}
