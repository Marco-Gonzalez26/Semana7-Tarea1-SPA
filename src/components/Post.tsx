interface PostProps {
  userId: number
  id: number
  title: string
  content: string
}

export const Post = (data: PostProps) => {
  return (
    <div className='border shadow rounded-lg p-4'>
      <h1 className='text-xl font-bold underline'>{data.title}</h1>
      <p className='mt-2'>{data.content}</p>
    </div>
  )
}
