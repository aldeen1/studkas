// app/posts/[postId]/page.tsx
import { getAllPost, getOnePost } from '@/lib/api'
import { Post } from '@/types/post'

type PageProps = {
  params: { postId: string }
}

export async function generateStaticParams() {
  const all = await getAllPost()
  return all.posts.slice(0, 5).map(post => ({
    postId: post.id.toString(),
  }))
}

export const revalidate = 60

export default async function PostPage({ params }: PageProps) {
    const { postId } = await params

    const post: Post = await getOnePost(Number(postId))

    if (!post) {
        <div>Post not found</div>
    }

    return (
        <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg">{post.body}</p>
        </div>
    )
}
