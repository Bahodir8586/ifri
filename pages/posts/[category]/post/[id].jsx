export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export async function getStaticProps(context) {
  //   {category:id, post:id}
  //   TODO: load the content of Post with this ID
  console.log(context.params)
  return { props: { hi: 'hi' } }
}

const Post = ({ ...props }) => {
  return <></>
}
export default Post
