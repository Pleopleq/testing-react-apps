import React, { useState } from 'react'

const FormLogin = ({ onSubmit }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            username,
            password
        })
    }

    return (
    <form onSubmit={handleFormSubmit}>
    <h1>Login</h1>
        <div>
            <div>
                <label htmlFor='usernameInput'>Username:</label>
                <input id='usernameInput' type='text' onChange={handleUsername} value={username}></input>
            </div>
        </div>
        <div>
            <label htmlFor='passwordInput'>Password:</label>
            <input id='passwordInput' type='password' onChange={handlePassword} value={password}></input>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    )
}

export default FormLogin