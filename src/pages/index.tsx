import React from 'react'
import Head from 'next/head'
import { HomeWrapper } from '../styles/pages/Home'
import Button from '../components/button/button'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        <Button onPress={() => console.log('yeah bro')}>
          Rendering a button component
        </Button>
      </HomeWrapper>
    </div>
  )
}

export default Home
