import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default MyApp
