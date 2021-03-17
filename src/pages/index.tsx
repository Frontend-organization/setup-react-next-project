import Head from 'next/head'
import Home from '../layouts/Home'

const WebsiteHome = (): JSX.Element => {
  return (
    <div data-testid="website-home">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}

export default WebsiteHome
