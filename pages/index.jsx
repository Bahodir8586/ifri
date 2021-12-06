import Head from 'next/head'

import Layout from '../layout'
import Header from '../modules/index/Header'

export async function getStaticProps(context) {
  return { props: {} }
}

const Index = () => (
  <div>
    <Head>
      <title>IFRI - Ilm-fan Rivojlanish</title>
    </Head>
    <Layout>
      <Header />
    </Layout>
  </div>
)
export default Index
