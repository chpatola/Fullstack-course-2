import React from 'react'

const Course = ({courses}) =>{
    return(
      <div>
      <h1>{courses.name}</h1>
     <Rows courses = {courses}/>
     <Total courses = {courses}/>
    </div>
    )
}
const Rows = ({courses})=>{
  const rows = () => courses.parts.map(parts =>
   
      <li
        key={parts.name}>
        {parts.name}&nbsp;
        {parts.exercises}
      </li>
    ) 
    return(
     rows()     
    )

}
const Total = ({courses}) =>{
  var initialValue = 0
  var total = courses.parts.reduce((fi,se) => fi+se.exercises,initialValue);
  console.log('Total course amount ' ,total)
  return(
    <h3>Total amount of exercises is {total} </h3>
  )
}

export default Course