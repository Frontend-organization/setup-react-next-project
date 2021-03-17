import { screen, render } from '@testing-library/react'
import WebsiteHome from '../../src/pages'
import { ThemeContainer } from '../utils'

describe('home route', () => {
  it('render correctly', () => {
    render(
      <ThemeContainer>
        <WebsiteHome />
      </ThemeContainer>
    )
    expect(screen.getByTestId('website-home')).toBeInTheDocument()
  })
})
