import Head from 'next/head'
import Contribute from './home/section/contribute'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevsHelpDevs</title>
        <meta name="description" content="DevsHelpDevs Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 >
          Welcome to <a href="/">DevsHelpDevs!</a>
        </h1>

<Contribute/>

      
      </main>
    </div>
  )
}
