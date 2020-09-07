import React from 'react'

export default function Todo(props) {
    return (
        <div>
<li>
            <h3 style={{display:"inline-flex"}}>{props.todoItem}</h3>
            <button onClick={props.delete} style={{float:"right",marginTop:"20px"}}>Delete</button>
            </li>
        </div>
    )
}
