import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import ShowInformation from './index'

describe('Show Information Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<ShowInformation />)
  })

  it('should modify the name', () => {
    const nameInput = wrapper.container.querySelector('input[name="name"]') as HTMLInputElement
    const ageInput = wrapper.container.querySelector('input[name="age"]') as HTMLInputElement

    fireEvent.change(nameInput, { target: { value: 'Or Hasson' } })
    fireEvent.change(ageInput, { target: { value: 33 } })

    expect(nameInput.value).toBe('Or Hasson')
    expect(ageInput.value).toBe('33')
  })

  it('should show the personal information when user clicks on the button', () => {
    const button = wrapper.container.querySelector('button')

    fireEvent.click(button)

    const showInformation = wrapper.container.querySelector('.personalInformation')

    expect(showInformation).toBeInTheDocument()
  })

  afterAll(cleanup)
})