import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Hello from './index'

describe('Hello Component', () => {
  it('should render Hello World', () => {
    const wrapper = render(<Hello />)
    expect(wrapper.getByText('Hello World')).toBeInTheDocument()
  })
  it('should render the name prop', () => {
    const wrapper = render(<Hello name='Or Hasson' />)
    expect(wrapper.getByText('Hello Or Hasson')).toBeInTheDocument()
  })
  it('should has .Home classname', () => {
    const wrapper = render(<Hello />)
    expect(wrapper.container.firstChild).toHaveClass('Hello')
  })
  afterAll(cleanup)
})