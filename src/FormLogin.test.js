import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormLogin from './FormLogin'

test('FormLogin renders', () => {
    render(<FormLogin  />)
    screen.getByLabelText(/username:/i)
    screen.getByLabelText(/password:/i)
    screen.getByRole('button', { name: /submit/i })
})

test('Submitting the form calls onSubmit with username and password', () => {
    const handleSubmit = jest.fn()
    render(<FormLogin onSubmit={handleSubmit} />)
    const username = 'pleopleo'
    const password = '123456'

    userEvent.type(screen.getByLabelText(/username:/i), username)
    userEvent.type(screen.getByLabelText(/password:/i), password)
    userEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(handleSubmit).toHaveBeenCalledWith({
        username,
        password,
    })
    expect(handleSubmit).toHaveBeenCalledTimes(1)
})
