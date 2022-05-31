import React from "react";
import { Link, NavLink } from "react-router-dom"
import Students from "../Data/StudentData";


function NamesList(props) {
    return (
        <div className="name-list-container">
            <h1>Students</h1>
            <ul>
                {props.names.map((x) =>  {
                    return (
                    <li key={x}>
                        <NavLink 
                        style={({isActive}) => {
                            return {
                                color: isActive ? "green" : "black"
                            }
                        }}
                        to={`/student/${x}`}>
                            <h4 onClick={() => props.handleClick(x)}>{x}</h4>
                        </NavLink>
                    </li>)
                })}
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


// <li>
// <NavLink 
// style={({isActive}) => {
//     return {
//         color: isActive ? "green" : "black"
//     }
// }}
// to={`/student/${"Evelyn"}`}>
//     <h4 onClick={() => props.handleClick("Evelyn")}>Evelyn</h4>
// </NavLink>
// </li>
// <li> 
// <NavLink 
// to={`/student/${"Aranka"}`}>
//     <h4 onClick={() => props.handleClick("Aranka")}>Aranka</h4>
// </NavLink>
// </li>
// <li>
// <NavLink 
// to={`/student/${"Floris"}`}>
//     <h4 onClick={() => props.handleClick("Floris")}>Floris</h4>
// </NavLink>
// </li>
// <li>
// <NavLink 
// to={`/student/${"Hector"}`}>
//     <h4 onClick={() => props.handleClick("Hector")}>Hector</h4>
// </NavLink>
// </li>
// <li>
// <NavLink 
// to={`/student/${"Martina"}`}>
//     <h4 onClick={() => props.handleClick("Martina")}>Martina</h4>
// </NavLink>
// </li>
// <li>
// <NavLink 
// to={`/student/${"Maurits"}`}>
//     <h4 onClick={() => props.handleClick("Maurits")}>Maurits</h4>
// </NavLink>
// </li>
// <li>
// <NavLink 
// to={`/student/${"Rahima"}`}>
//     <h4 onClick={() => props.handleClick("Rahima")}>Rahima</h4>
// </NavLink>
// </li>
// <li>
// <NavLink 
// to={`/student/${"Sandra"}`}>
//     <h4 onClick={() => props.handleClick("Sandra")}>Sandra</h4>
// </NavLink>
// </li>
// <li>
// <NavLink 
// to={`/student/${"Wietske"}`}>
//     <h4 onClick={() => props.handleClick("Wietske")}>Wietske</h4>
// </NavLink>
// </li>
// <li>
// <NavLink 
// to={`/student/${"Storm"}`}>
//     <h4 onClick={() => props.handleClick("Storm")}>Storm</h4>
// </NavLink>
// </li>

export default NamesList

