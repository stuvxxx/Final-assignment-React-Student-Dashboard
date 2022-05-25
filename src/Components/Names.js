import React from "react";


function NamesList(props) {
    return (
        <div>
            <ul>
                <li><button onClick={() => props.onClick("Evelyn")}>Evelyn</button></li>
                <li><button onClick={() => props.onClick("Aranka")}>Aranka</button></li>
                <li><button onClick={() => props.onClick("Floris")}>Floris</button></li>
                <li><button onClick={() => props.onClick("Hector")}>Hector</button></li>
                <li><button onClick={() => props.onClick("Martina")}>Martina</button></li>
                <li><button onClick={() => props.onClick("Maurits")}>Maurits</button></li>
                <li><button onClick={() => props.onClick("Rahima")}>Rahima</button></li>
                <li><button onClick={() => props.onClick("Sandra")}>Sandra</button></li>
                <li><button onClick={() => props.onClick("Wietske")}>Wietske</button></li>
                <li><button onClick={() => props.onClick("Storm")}>Storm</button></li>
            </ul>
        </div>
    )
}

export default NamesList

