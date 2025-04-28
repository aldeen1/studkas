'use client'

import React, { useEffect, useState } from 'react'
import { Posts } from '@/types/post'
import { getAllPost } from '@/lib/api'
import PostCard from './PostCard'

const PostList = () => {
    const [posts, setPosts] = useState<Posts>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getAllPost()
                setPosts(data)
            } catch (error) {
                console.error('Error fetching posts: ', error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts() 
    }, []) 

    if (loading) return <div>Loading...</div>
    if (!posts) return <div>No posts found</div>

    return (
        <div className="grid gap-4 text-white">
            {posts.posts.map((post) => (
                <PostCard key={post.id} postId={post.id} />
            ))}
        </div>
    )
}

export default PostList