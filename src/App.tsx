import React, { useState } from "react"

export default function App () {

    const [ value, setValue ] = useState<number>(0)

    const handleAdd = () => {
        setValue(value => value + 1)
    }

    return (

        <main>
            <h1>New App</h1>
            <span>{value}</span>
            <button type="button" onClick={handleAdd}>Add</button>
        </main>
    )
}