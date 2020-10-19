import React from 'react'
import Head from 'next/head'
import { HomeWrapper } from '../styles/pages/Home'

const Home: React.FC = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeWrapper>
				<h1>Initial Page</h1>
			</HomeWrapper>
		</div>
	)
}

export default Home
