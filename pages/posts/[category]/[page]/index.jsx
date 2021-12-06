import Link from 'next/link'

import Layout from '../../../../layout'

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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export async function getStaticProps(context) {
  //   {category:id, page:id}
  //   TODO: get posts of that category for this page
  console.log(context.params)
  return { props: { categoryName: 'Scientific Articles' } }
}

const Page = ({ categoryName }) => {
  return (
    <Layout>
      <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="capitalize text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              {categoryName}
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={`/posts/${post.category.id}/post/${post.id}`}
                passHref={true}
              >
                <div className="flex flex-col cursor-pointer transform hover:scale-105 transition duration-200 rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <Link
                          href={`/posts/${post.category.id}/1`}
                          passHref={true}
                        >
                          <a className="hover:underline">
                            {post.category.name}
                          </a>
                        </Link>
                      </p>
                      <a href={post.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{post.author}</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {post.author}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
