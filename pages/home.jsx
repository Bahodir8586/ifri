import Head from 'next/head'

import Layout from '../layout'

export async function getStaticProps(context) {
  // TODO: get posts for home page
  return { props: {} }
}

const Home = () => (
  <div>
    <Head>
      <title>IFRI - Ilm-fan Rivojlanish</title>
    </Head>
    <Layout></Layout>
  </div>
)
export default Home
