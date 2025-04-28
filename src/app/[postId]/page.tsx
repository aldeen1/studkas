import { getOnePost } from '@/lib/api'
import { Post } from '@/types/post'

type PostPageProps = {
  params: {
    postId: string
  }
}

const PostPage = async ({ params }: PostPageProps) => {
  const { postId } = params
  const post: Post = await getOnePost(Number(postId))

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </div>
  )
}

export default PostPage
