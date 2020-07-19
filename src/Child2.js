import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer'


export default function Child2() {
    const [state, dispatch] = useReducer(CounterReducer, 0)
    const INCREMENT = 'INCREMENT';
    return (
        <div>
            <h1>Reduce value: {state}</h1>
            <button onClick={()=>dispatch(INCREMENT)}>Increament Reducer</button>
        </div>
    )
}
