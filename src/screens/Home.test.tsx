import React from 'react'
import { render } from '@testing-library/react'

describe('Testing home page', () => {
  it('Render correctly', () => {
    const { getByText } = render(<button>Hello world</button>)
    expect(getByText('Hello world')).toBeDefined()
  })
})
