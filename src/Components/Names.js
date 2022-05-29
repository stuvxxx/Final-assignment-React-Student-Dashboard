import React from "react";
import { Link } from "react-router-dom"


function NamesList(props) {
    return (
        <div className="name-list-container">
            <ul>
                <li>
                    <Link to="/Student">
                        <h4 onClick={() => props.handleClick("Evelyn")}>Evelyn</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/Student">
                <h4 onClick={() => props.handleClick("Aranka")}>Aranka</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/Student">
                <h4 onClick={() => props.handleClick("Floris")}>Floris</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/Student">
                <h4 onClick={() => props.handleClick("Hector")}>Hector</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/Student">
                <h4 onClick={() => props.handleClick("Martina")}>Martina</h4>
                    </Link>
                </li>
                <li>
                    <Link to="/Student">
                <h4 onClick={() => props.handleClick("Maurits")}>Maurits</h4>
                    </Link>
                </li>
                <li>
                <Link to="/Student">
                <h4 onClick={() => props.handleClick("Rahima")}>Rahima</h4>
                </Link>
                </li>
                <li>
                <Link to="/Student">
                <h4 onClick={() => props.handleClick("Sandra")}>Sandra</h4>
                </Link>
                </li>
                <li>
                <Link to="/Student">
                <h4 onClick={() => props.handleClick("Wietske")}>Wietske</h4>
                </Link>
                </li>
                <li>
                <Link to="/Student">
                <h4 onClick={() => props.handleClick("Storm")}>Storm</h4>
                </Link>
                </li>
            </ul>
        </div>
    )
}

// function NamesList(props) {
//     return (
//         <div>
//             <ul>
//                 {props.names.map((name) => (
//                     <NameItem
//                         name={name}
//                         key={name}
//                         handleClick={props.handleClick}
//                         onChange={props.handleFilterChange}
//                         id={name + "filterbox"}
//                         checked={props.boxes[props.names.indexOf(name)]}
//                     />           
//                 ))}
//             </ul>
//         </div>
//     )
// }

export default NamesList

