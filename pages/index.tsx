import Nav from '../components/Nav'
import Main from '../components/main/Main'
import Layout from '../components/Layout'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../components/Footer'))

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Index</title>
      </Head>
      <Nav />
      <Main />
      <Footer />
    </Layout>
  )
}
