import React from "react";

function Checkboxes(props) {
    return (
        <div>
            <input 
                onChange={() => props.onChange()} 
                type="checkbox" 
                id="filterbox" 
                name="filterbox" 
                value="fun"
                checked={props.aap}
                />Filter
        </div>
    )
}

export default Checkboxes