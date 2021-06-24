import Head from 'next/head'
import Testimonials from '../components/pages/home/testimonials'

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

        <Testimonials />
      </main>
    </div>
  )
}
