import React, {useState} from 'react';
import { MyContext } from './MyContext';
import childComponent from './childComponent';

const parentComponent = () => {
    const {text, setText} = useState("")
  return (
    <>
      <div>
        <MyContext.Provider value={{text, setText}}>
            <childComponent/>
        </MyContext.Provider>
      </div>
   </>
  )
}

export default parentComponent