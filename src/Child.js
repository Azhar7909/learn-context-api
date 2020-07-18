import React, { useContext } from 'react'
import counterContext from './CounterContext'


export default function Child() {

    let context = useContext(counterContext)
    
    return (
        <div>
            <h1>Child Get Value {context[0]}</h1>
            <button onClick={()=>{context[1](++context[0])}}>Increament</button>
        </div>
    )
}
