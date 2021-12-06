import Head from 'next/head'

import Layout from '../layout'
import Header from '../modules/index/Header'
import Contact from '../modules/index/Contact'
import Stats from '../modules/index/Stats'
import Faqs from '../modules/index/Faqs'

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
      <Faqs />
      <Contact />
    </Layout>
  </div>
)
export default Index
