import React from 'react';
import Message from './Message/Message';
import Counter from './Counter/Counter';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
const App = () => {
  return <div>
        <Provider store={store}>
        <h1> App Component</h1>
         <Counter/>
         </Provider >
    </div>
  
}

export default App