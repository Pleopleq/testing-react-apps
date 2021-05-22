import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ColorButton from './ColorButton'

test('initial conditions', () => {
    render(<ColorButton/> )
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    expect(colorButton).toBeEnabled()
    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).not.toBeChecked()
})

test('disable/enable the color button', () => {
    render(<ColorButton></ColorButton>)
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    const checkBox = screen.getByRole('checkbox')

    expect(colorButton).toBeEnabled()
    userEvent.click(checkBox)
    expect(colorButton).toBeDisabled()
    userEvent.click(checkBox)
    expect(colorButton).toBeEnabled()
    
})

test('button has correct initial color', () => {
    render(<ColorButton/>)
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    expect(colorButton).toHaveStyle({ backgroundColor: 'red'})
})

test('button turn blue when clicked', () => {
    render(<ColorButton/>)
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    userEvent.click(colorButton)
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})
})

