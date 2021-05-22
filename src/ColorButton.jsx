import React, { useState } from 'react'

const ColorButton = () => {
    const [color, setColor] = useState('red')
    const [isDisabled, setIsDisabled] = useState(false)
    const newButtonColor = color === 'red' ? 'blue' : 'red'

    const handleOnClick = () => {
        if (color === 'red') { return setColor('blue') }
        return setColor('red')
    }

    return (
        <div>
            <button style={{ backgroundColor: color }} onClick={handleOnClick} disabled={isDisabled}>Change to {newButtonColor}</button>
            <input type='checkbox' onChange={(e) => setIsDisabled(e.target.checked)}></input>
        </div>
    )
}

export default ColorButton