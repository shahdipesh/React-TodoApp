import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default function Todo(props) {
    return (
        <div>
<li>
            <h3 style={{display:"inline-flex"}}>{props.todoItem}</h3>
            <span onClick={props.delete} style={{float:"right",marginTop:"20px",color:"red"}}><DeleteIcon /></span>
            </li>
        </div>
    )
}
