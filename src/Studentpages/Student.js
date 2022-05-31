import React from "react";
import Students from "../Data/StudentData";
import { useParams } from "react-router-dom";



function Student() {
    const { studentid } = useParams()
    const student = Students.Students.filter(student => student.name === studentid) 
    console.log(student)
    return (
    <div className="student-info-container">
        <h1>Student info:</h1><br></br>
        <div className="info">
        <ul>
            <li><span>Name:</span> {studentid ? student[0].name : "-"}</li>
            <li><span>Email:</span>: {studentid ? student[0].email : "-"}</li>
            <li><span>Phone:</span>: {studentid ? student[0].phone : "-"}</li>
            <li><span>Adress:</span>: {studentid ? student[0].address : "-"}</li>
            <li><span>Postal Zip:</span> {studentid ? student[0].postalZip : "-"}</li>
        </ul>
        </div>
    </div>
    )
} 





export default Student