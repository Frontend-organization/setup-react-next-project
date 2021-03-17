import styled from 'styled-components'
import { LayoutProps, layout } from 'styled-system'
import { TestProps } from '../../utils/tools'

type Props = LayoutProps &
  TestProps & {
    onPress: <T>() => Promise<T> | T | void
  }

const ButtonWrapper = styled.button`
  ${layout}
  min-width: max-content;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text};
`

const Button: React.FC<Props> = ({ children, onPress, ...rest }) => {
  return (
    <ButtonWrapper onClick={onPress} {...rest}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
