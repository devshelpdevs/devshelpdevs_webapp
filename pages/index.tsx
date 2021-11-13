import Head from 'next/head'
import HomePage from './homepage'


export default function Home() {
  return (
    <div>
      <Head>
        <title>DevsHelpDevs - A developers community run charity platform</title>
        <meta name="description" content="A developers community run charity platform that helps to provide developers in developing countries with the needed tools to work" />
        <link rel="icon" href="/favicon.ico" />

        {/* facebook open graph */}
        <meta property="og:title" content="DevsHelpDevs" />
        <meta property="og:site_name" content="DevsHelpDevs" />
        <meta property="og:description"
          content="A developers community run charity platform that helps to provide developers in developing countries with the needed tools to work" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image"
          content="https://res.cloudinary.com/dahn8uiyc/image/upload/v1616148009/devs_help_logo_nhhzov.png" />
        <meta property="og:url" content="https://devshelpdevs.org" />

        {/* Twitter cards  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@HelpDevs" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  )
}
