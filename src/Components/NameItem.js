import React from "react";

function NameItem(props) {
    return (
        <div>
        <li
            key={props.name}
            value={props.name}
            onClick={() => props.handleCLick()}
        >{props.name}</li>
        <input></input>
        </div>
    )
}

export default NameItem