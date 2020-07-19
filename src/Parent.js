import React, { useContext } from 'react'
import Child from './Child'
import counterContext from './CounterContext'
import Child2 from './Child2'

export default function Parent() {

    const context = useContext(counterContext)

    return (
        <div>
            <h1>Parent Get value {context[0]}</h1>
            <Child />
            <Child2 />
        </div>
    )
}
