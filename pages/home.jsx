import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../layout'
import PostCard from '../components/PostCard'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    category: { name: 'Science', id: '1' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    author: 'Roel Aufderehar',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    category: { name: 'Science', id: '1' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    author: 'Brenna Goyette',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    category: { name: 'Science', id: '1' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    author: 'Daniela Metz',
  },
]

export async function getStaticProps(context) {
  // TODO: get posts with their category name for home page
  return { props: {} }
}

const Home = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>IFRI - Ilm-fan Rivojlanish</title>
      </Head>
      <Layout>
        <div className="py-8">
          <div className="relative py-12 bg-white px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <Link href={`/posts/1/1`} passHref={true}>
                <a className="capitalize hover:text-indigo-700 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Historical Sciences
                </a>
              </Link>
              <div className="mt-12 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                  <PostCard post={post} key={post.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="relative py-12 bg-white px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <Link href={`/posts/1/1`} passHref={true}>
                <a className="capitalize hover:text-indigo-700 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Natural Sciences
                </a>
              </Link>
              <div className="mt-12 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                  <PostCard post={post} key={post.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="relative py-12 bg-white px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <Link href={`/posts/1/1`} passHref={true}>
                <a className="capitalize hover:text-indigo-700 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Exact Sciences
                </a>
              </Link>
              <div className="mt-12 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                  <PostCard post={post} key={post.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default Home
