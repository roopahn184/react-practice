import React from 'react';
import CompD from './CompD';

const CompC = (props) => {
  return (
    <div>
        <h1>Component C</h1>
        <CompD name={props.name} />
    </div>
  )
}

export default CompC