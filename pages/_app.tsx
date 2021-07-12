import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Home from './homepage';
import type { NextComponentType } from "next";
import Layout from '../components/layout';

import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";


const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> =(props: AppLayoutProps ) =>{
  const { Component, pageProps, router } = props;
  return (
  <>
  <Layout>
    <Component {...pageProps} key={router.route} />
  </Layout>
  </>
)
}

export default App
