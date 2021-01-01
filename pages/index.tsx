import Nav from '../components/Nav'
import Main from '../components/main/Main'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Head from 'next/head'

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
