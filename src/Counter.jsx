import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    const handleIncrease = () => { setCounter(counter => counter + 1)}
    const handleDecrease = () => { setCounter(counter => counter - 1)}

    return (
        <div style={{ padding: '2rem'}}>
            <p>Current count: {counter}</p>
            <div>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Decrease</button>
            </div>
        </div>
    )
}

export default Counter