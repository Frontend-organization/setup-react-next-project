import styled from 'styled-components'

export const HomeWrapper = styled.main`
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	width: 100%;

	h1 {
		color: ${({ theme }) => theme.colors.primary};
		font-weight: 400;
		text-transform: uppercase;
	}
`
