import React from "react";
import { useState } from "react";

// function HandlingState(){
//   var [studentdCount, setStudentCount] = useState(0)

// var addStudent = ()=>{
//     setStudentCount(++studentdCount);
//   }
//     return (
//      <div>
//        <p>Number of Students in Classroom is:{studentdCount}</p>
//        <button onClick={addStudent}>Add Student</button>
//      </div>
//     )
// } export default HandlingState

class HandlingState extends React.Component{
    constructor(props){
        super(props);
        this.state ={studentsCount:0}
        this.addStudent = this.addStudent.bind(this)
    }
    addStudent(){
        this.setState((prevState)=>{
          return {studentsCount:prevState.studentsCount +  1}
        })
    }

    render(){
        return (
          <div>
            <p>Number of students in Classroom:{this.state.studentsCount}</p>
            <button onClick={this.addStudent}>Add student</button>
          </div>
        )
    }
} export default HandlingState