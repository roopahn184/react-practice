import {MessageReducer} from './Message/Message.reducer';
import {createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

let Store =createStore( MessageReducer, composeWithDevTools())

export {Store}