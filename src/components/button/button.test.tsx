import { render } from '@testing-library/react'
import { ThemeContainer } from '../../../__tests__/utils'
import Button from './button'

describe('button component', () => {
  test('render', () => {
    const { getByTestId } = render(
      <ThemeContainer>
        <Button onPress={jest.fn} data-testid="button-component">
          Test button component
        </Button>
      </ThemeContainer>
    )
    expect(getByTestId('button-component')).toBeDefined()
  })
})
