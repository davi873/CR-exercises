import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import fieldReducer from './fieldComponentReducer'
import FieldComponent from './fieldComponent'

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <FieldComponent  initialValue='teste' />
    </Provider>
   ,
    document.getElementById('app')
)