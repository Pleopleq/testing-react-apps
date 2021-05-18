import * as React from 'react'
import { prettyDOM, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

test('Counter renders', () => {
    render(<Counter/>)
    screen.getByText('Current count: ', { exact: false }) // ignore case
    screen.getByRole('button', { name: /increase/i })
    screen.getByRole('button', { name: /decrease/i })
})

test('User clicks increase and the counter count is 1', () => {
    render(<Counter/>)
    const message = screen.getByText('Current count: ', { exact: false })
    const increment = screen.getByRole('button', { name: /increase/i }) 
    expect(message).toHaveTextContent('Current count: 0')
    userEvent.click(increment)
    expect(message).toHaveTextContent('Current count: 1')
})

test('User clicks decrease and the counter count is -1', () => {
    render(<Counter/>)
    const message = screen.getByText('Current count: ', { exact: false })
    const decrease = screen.getByRole('button', { name: /decrease/i }) 
    expect(message).toHaveTextContent('Current count: 0')
    userEvent.click(decrease)
    expect(message).toHaveTextContent('Current count: -1')
})
