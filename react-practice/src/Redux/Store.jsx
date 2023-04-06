import {MessageReducer} from './Message/Message.reducer';
import {createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

let store =createStore( MessageReducer, composeWithDevTools())

export {store}