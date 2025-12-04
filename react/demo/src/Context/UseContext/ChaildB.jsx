import React, { useContext } from 'react'
import { Data } from './ChaildA'

function ChaildB() {

    const { form, setform } = useContext(Data)

    return (
        <div>
            <h1>Hello B Component</h1>
            <h1>B name : {form.name}</h1>
            <button onClick={() => setform({ ...form, name: "prath" })}>Chnage name </button>

            <h1>Count : {form.count}</h1>
            <button onClick={() => setform({ ...form, count: form.count + 1 })}>increment</button>
            <button onClick={() => setform({ ...form, count: form.count - 1 })}>decrement</button>
        </div>
    )
}

export default ChaildB
