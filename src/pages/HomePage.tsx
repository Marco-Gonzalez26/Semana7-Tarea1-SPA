import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import dbposts from '../../db/posts.json'
import type { Post } from '../interfaces/Post'

export const HomePage = () => {
  const db = JSON.parse(JSON.stringify(dbposts))
  const [posts, setPosts] = useState<Post[]>([])

  const getPosts = () => {
    setPosts(db)
  }
  const addPost = (title: string, content: string) => {
    setPosts((posts) => [
      ...posts,
      {
        title,
        id: posts.length + 1,
        body: content,
        userId: 101,
        author: 'Marco González'
      }
    ])
  }

  const deletePost = (id: number) => {
    setPosts((posts) => posts.filter((post) => post.id !== id))
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='w-full max-w-2xl'>
        <h1 className='text-3xl font-bold underline'>Ejemplo de una SPA</h1>
        <div className='mt-6 '>
          <button
            className='bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded'
            onClick={() => addPost('Post de prueba', 'Esto es un post')}>
            Agregar Post
          </button>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center w-full mt-10'>
        <h1 className='text-3xl font-bold underline'>Posts</h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6'>
          {posts.map((post) => (
            <div
              key={post.id}
              className='border shadow rounded-lg p-4 relative hover:border-sky-500 hover:shadow-sky-500'>
              <button
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded absolute top-2 right-2'
                onClick={() => deletePost(post.id)}>
                X
              </button>
              <Link to={`/post/${post.id}`} className='block'>
                <h2 className='text-xl font-bold underline hover:text-indigo-500'>
                  {post.title}
                </h2>

                <p className='mt-2'>{post.body}</p>
                <p className='mt-2 text-sm italic '>{post.author}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
