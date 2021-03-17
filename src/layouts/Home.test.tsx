import { render } from '@testing-library/react'
import { ThemeContainer } from '../../__tests__/utils'
import Home from './Home'

describe('Testing home page', () => {
  it('Render correctly', () => {
    const { getByText } = render(
      <ThemeContainer>
        <Home />
      </ThemeContainer>
    )
    expect(getByText('Initial-configuration')).toBeDefined()
  })
})
