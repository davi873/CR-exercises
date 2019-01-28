import React from 'react'
import ReactDOM from 'react-dom'
import Member from './member'
import Family from './family'

ReactDOM.render(
    <div>
        <Family lastName="Pires"> 
            <Member name="Davi" />
            <Member name="Ester" />
            <Member name="José" />
        </Family>
    </div>,
    document.getElementById('app')
)
