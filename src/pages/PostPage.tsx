import { useState, useEffect } from 'react'
import posts from '../../db/posts.json'
import { useParams, useNavigate } from 'react-router'
import type { Post } from '../interfaces/Post'

export const PostPage = () => {
  const db = JSON.parse(JSON.stringify(posts))
  const params = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post>({
    body: '',
    title: '',
    id: 0,
    userId: 0,
    author: ''
  })

  const getPost = () => {
    setPost(db.find((post: Post) => post.id === Number(params.id)))
  }
  useEffect(() => {
    getPost()
  }, [])

  if (!post.title) return <div>Cargando</div>
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <button
        className='bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded absolute top-4 left-4'
        onClick={() => navigate(-1)}>
        Volver
      </button>
      <article className='w-full max-w-2xl'>
        <h1 className='text-3xl font-bold underline'>{post.title}</h1>
        <p className='text-xl'>{post.body}</p>
      </article>
    </div>
  )
}
