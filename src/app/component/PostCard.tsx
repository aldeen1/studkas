'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Post } from '@/types/post'
import { getOnePost } from '@/lib/api'

const PostCard = ({ postId }: { postId: number }) => {
    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getOnePost(postId)
                setPost(data)
            } catch (error) {
                console.error('Error fetching post: ', error)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [postId])

    if (loading) return <div>Loading...</div>
    if (!post) return <div>Not found</div>

    return (
        <Link href={`/${postId}`} className="flex flex-col overflow-hidden w-full h-full rounded bg-indigo-400 p-4 hover:bg-indigo-500 transition">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-sm">{post.body.slice(0, 50)}...</p>
        </Link>
    )
}

export default PostCard
