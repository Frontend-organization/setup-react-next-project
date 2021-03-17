import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const ThemeContainer = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
