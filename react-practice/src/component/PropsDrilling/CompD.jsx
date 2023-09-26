import React from 'react'

const CompD = (props) => {
  return (
    <div>
        <h1>Component D</h1>
       <p>data recieved from Component A:{props.name}</p>
    </div>
  )
}

export default CompD