import React from "react";
import NameItem from "./NameItem";


function NamesList(props) {
    return (
        <div>
            <ul>
            <button onClick={() => props.handleFilterChangeSelection("deselect")}>Deselect All!</button>
                    <button onClick={() => props.handleFilterChangeSelection("select")}>Select All!</button>
                    <br />
                <li>

                    <button onClick={() => props.handleClick("Evelyn")}>Evelyn</button>
                    <input 
                        onChange={() => props.handleFilterChange(0)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[0]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Aranka")}>Aranka</button>
                    <input 
                        onChange={() => props.handleFilterChange(1)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[1]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Floris")}>Floris</button>
                    <input 
                        onChange={() => props.handleFilterChange(2)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[2]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Hector")}>Hector</button>
                <input 
                        onChange={() => props.handleFilterChange(3)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[3]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Martina")}>Martina</button>
                <input 
                        onChange={() => props.handleFilterChange(4)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[4]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Maurits")}>Maurits</button>
                <input 
                        onChange={() => props.handleFilterChange(5)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[5]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Rahima")}>Rahima</button>
                <input 
                        onChange={() => props.handleFilterChange(6)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[6]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Sandra")}>Sandra</button>
                <input 
                        onChange={() => props.handleFilterChange(7)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[7]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Wietske")}>Wietske</button>
                <input 
                        onChange={() => props.handleFilterChange(8)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[8]}
                    />
                </li>
                <li><button onClick={() => props.handleClick("Storm")}>Storm</button>
                <input 
                        onChange={() => props.handleFilterChange(9)} 
                        type="checkbox" 
                        id="filterbox" 
                        name="boxes" 
                        checked={props.boxes[9]}
                    />
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

