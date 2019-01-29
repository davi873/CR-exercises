import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {combineReducers, createStore} from 'redux'

import counterReducer from './counterReducer'
import Counter from './counterComponent'

const reducers = combineReducers({
    counter: counterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
         <Counter/>
    </Provider>
   
    , document.getElementById('app')
)