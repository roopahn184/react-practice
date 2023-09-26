import React from 'react';
import CompB from './CompB';

const CompA = () => {
    const enames ="Roopa"
  return (
    <div>
        <h1>Component A</h1>
        <CompB name={enames} />
    </div>
  )
}

export default CompA