import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ColorButton from './ColorButton'

test('initial conditions', () => {
    render(<ColorButton/> )
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    expect(colorButton).toBeEnabled()
    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).not.toBeChecked()
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

test('disable/enable the color button', () => {
    render(<ColorButton></ColorButton>)
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    const checkBox = screen.getByRole('checkbox', { name: 'Disable button'})

    expect(colorButton).toBeDisabled()
    userEvent.click(checkBox)
    expect(colorButton).toBeDisabled()
    userEvent.click(checkBox)
    expect(colorButton).toBeEnabled()
})

test('Disable button makes the button gray but stay in the correct color when enables it', () => {
    render(<ColorButton></ColorButton>)
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' })

    //Button is gray when disabled and red when enabled.
    userEvent.click(checkBox)
    expect(colorButton).toBeDisabled()
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
    userEvent.click(checkBox)
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

    //Button is clicked first, then is disabled, button is gray. Click the checkbox to enable button and button is blue.
    userEvent.click(colorButton)
    userEvent.click(checkBox)
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
    userEvent.click(checkBox)
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})
