import React from 'react'
import styled from 'styled-components'
import { LayoutProps, layout } from 'styled-system'

type Props = LayoutProps & {
  onPress: <T>() => Promise<T> | T | void
}

const ButtonWrapper = styled.button`
  ${layout}
  min-width: max-content;
  white-space: nowrap;
`

const Button: React.FC<Props> = ({ children, onPress, ...rest }) => {
  return (
    <ButtonWrapper onClick={onPress} {...rest}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
