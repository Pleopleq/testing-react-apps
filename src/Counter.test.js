import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Counter from './Counter'

test('Counter renders', () => {
    render(<Counter/>)
    screen.getByText('Current count: ', { exact: false }) // ignore case
    screen.getByRole('button', { name: /increase/i })
    screen.getByRole('button', { name: /decrease/i })
})

