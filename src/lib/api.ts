import { Post, Posts } from "@/types/post"

const BASE_URL = 'https://dummyjson.com/posts'

async function getAllPost() : Promise<Posts> {
    const response = await fetch(`${BASE_URL}`)
    return response.json()
}

async function getOnePost(postId: number) : Promise<Post> {
    const response = await fetch(`${BASE_URL}/${postId}`)
    return response.json()
}

export {getAllPost, getOnePost}