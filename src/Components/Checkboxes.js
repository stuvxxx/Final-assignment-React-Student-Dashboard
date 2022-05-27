import React from "react";



function Checkboxes(props) {
    return (
        <div>
            <ul>
                <li> Evelyn
                    <input 
                      onChange={() => props.handleFilterChange(0)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[0]}
                    />    
                </li>
                <li> Aranka
                    <input 
                      onChange={() => props.handleFilterChange(1)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[1]}
                    />
                </li>
                <li> Floris
                    <input 
                      onChange={() => props.handleFilterChange(2)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[2]}
                    />
                </li>
                <li> Hector
                <input 
                      onChange={() => props.handleFilterChange(3)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[3]}
                    />
                </li>
                <li> Martina
                <input 
                      onChange={() => props.handleFilterChange(4)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[4]}
                    />
                </li>
                <li> Maurits
                <input 
                      onChange={() => props.handleFilterChange(5)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[5]}
                    />
                </li>
                <li> Rahima
                <input 
                      onChange={() => props.handleFilterChange(6)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[6]}
                    />
                </li>
                <li> Sandra
                <input 
                      onChange={() => props.handleFilterChange(7)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[7]}
                    />
                </li>
                <li> Wietske
                <input 
                      onChange={() => props.handleFilterChange(8)} 
                      type="checkbox" 
                      id="filterbox" 
                      name="boxes" 
                      checked={props.boxes[8]}
                    />
                </li>
                <li> Storm
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

export default Checkboxes