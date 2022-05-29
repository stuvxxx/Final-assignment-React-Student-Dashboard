import React from "react";



function Checkboxes(props) {
    return (
        <div className="checkboxes-container">
            <ul className="aap">
                <li onClick={() => props.checkValue() && props.boxes[0] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(0)}> 
                    <input 
                      type="checkbox" 
                      id="filterbox0" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[0]}
                    /> Evelyn 
                </li>
                <li onClick={() => props.checkValue() && props.boxes[1] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(1)}> 
                    <input 
                      type="checkbox" 
                      id="filterbox1" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[1]}
                    /> Aranka
                </li>
                <li onClick={() => props.checkValue() && props.boxes[2] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(2)}>
                    <input 
                      type="checkbox" 
                      id="filterbox2" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[2]}
                    /> Floris
                </li>
                <li onClick={() => props.checkValue() && props.boxes[3] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(3)}> 
                <input 
                      type="checkbox" 
                      id="filterbox3" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[3]}
                    /> Hector
                </li>
                <li onClick={() => props.checkValue() && props.boxes[4] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(4)} > 
                <input  
                      type="checkbox" 
                      id="filterbox4" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[4]}
                    /> Martina
                </li>
                <li onClick={() => props.checkValue() && props.boxes[5] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(5)}> 
                <input 
                      type="checkbox" 
                      id="filterbox5" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[5]}
                    /> Maurits
                </li>
                <li onClick={() => props.checkValue() && props.boxes[6] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(6)}> 
                <input 
                      type="checkbox" 
                      id="filterbox6" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[6]}
                    /> Rahima
                </li>
                <li onClick={() => props.checkValue() && props.boxes[7] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(7)} > 
                <input 
                      type="checkbox" 
                      id="filterbox7" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[7]}
                    /> Sandra
                </li>
                <li onClick={() => props.checkValue() && props.boxes[8] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(8)}> 
                <input 
                      type="checkbox" 
                      id="filterbox8" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[8]}
                    /> Wietske
                </li>
                <li onClick={() => props.checkValue() && props.boxes[9] ? props.handleFilterChangeSelection("deselect") : props.handleFilterChange(9)} > 
                <input  
                      type="checkbox" 
                      id="filterbox9" 
                      name="boxes" 
                      readOnly={true}
                      checked={props.boxes[9]}
                    /> Storm
                </li>
            </ul>
            <button onClick={() => props.handleFilterChangeSelection("deselect")}>Deselect All!</button>
            <button onClick={() => props.handleFilterChangeSelection("select")}>Select All!</button>
        </div>
    )
}

export default Checkboxes