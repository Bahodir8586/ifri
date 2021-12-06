import Head from 'next/head'

import Layout from '../layout'
import Header from '../modules/index/Header'
import Contact from '../modules/index/Contact'
import Stats from '../modules/index/Stats'
import Faqs from '../modules/index/Faqs'

export async function getStaticProps(context) {
  return { props: {} }
}

const Index = () => {
  const submitForm = (name, email, phone, message) => {
    //   TODO: handle submit there
    console.log(name, email, phone, message)
  }
  return (
    <div>
      <Head>
        <title>IFRI - Ilm-fan Rivojlanish</title>
      </Head>
      <Layout>
        <Header />
        <Stats />
        <Faqs />
        <Contact submit={submitForm} />
      </Layout>
    </div>
  )
}
export default Index
