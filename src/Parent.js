import React, { useContext } from 'react'
import Child from './Child'
import counterContext from './CounterContext'

export default function Parent() {

    const context = useContext(counterContext)

    return (
        <div>
            <h1>Parent Get value {context[0]}</h1>
            <Child />
        </div>
    )
}
