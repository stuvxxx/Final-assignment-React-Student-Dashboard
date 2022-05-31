import React from "react";
import Students from "../Data/StudentData";
import { useParams } from "react-router-dom";



function Student() {
    const { studentid } = useParams()
    const student = Students.Students.filter(student => student.name === studentid) 
    console.log(student)
    return (
    <div className="main-container">
        <h1>Student info:</h1>
        <p>{student[0].name}</p>
    </div>
    )
} 





export default Student