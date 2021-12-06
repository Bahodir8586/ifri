import Head from 'next/head'

import Layout from '../layout'
import Header from '../modules/index/Header'
import Contact from '../modules/index/Contact'
import Stats from '../modules/index/Stats'

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
      <Stats />
      <Contact />
    </Layout>
  </div>
)
export default Index
