import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <h3>{props.todoItem}</h3>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
}
