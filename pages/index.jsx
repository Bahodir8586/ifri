import Head from 'next/head'

import Layout from '../layout'
import Header from '../layout/Header'

export async function getStaticProps(context) {
  // TODO: get posts for home page
  return { props: {} }
}

const Home = () => (
  <div>
    <Head>
      <title>IFRI</title>
    </Head>
    <Layout></Layout>
  </div>
)
export default Home
