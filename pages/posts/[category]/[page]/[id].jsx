export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export async function getStaticProps(context) {
  console.log(context.params)
  return { props: { hi: 'hi' } }
}

const Post = ({ ...props }) => {
  return <></>
}
export default Post
