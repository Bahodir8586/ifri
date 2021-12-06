export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export async function getStaticProps(context) {
  //   {category:id, page:id}
  console.log(context.params)
  return { props: { hi: 'hi' } }
}

const Page = ({ ...props }) => {
  return <></>
}
export default Page
