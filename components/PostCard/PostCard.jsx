import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.category.id}/post/${post.id}`} passHref={true}>
      <div className="flex flex-col cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg shadow-lg overflow-hidden">
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
              <Link href={`/posts/${post.category.id}/1`} passHref={true}>
                <a className="hover:underline">{post.category.name}</a>
              </Link>
            </p>
            <a href={post.href} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{post.author}</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.author}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default PostCard
