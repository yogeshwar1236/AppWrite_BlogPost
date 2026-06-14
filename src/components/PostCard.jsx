import React, { useState } from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard(props) {
  const [imageFailed, setImageFailed] = useState(false)
  const post = props.post || props
  const postId = post.$id
  const title = post.title || post.Title || "Untitled post"
  const featuredImage = post.featuredImage || post.Image
  const imageUrl = featuredImage ? appwriteService.getFilePreview(featuredImage) : ""
  const imageFallbackText = featuredImage ? "Image failed" : "No image"

  return (
    <Link to={`/post/${postId}`} className='block h-full'>
        <article className='h-full w-full overflow-hidden rounded-lg bg-white text-slate-900 shadow-sm duration-200 hover:shadow-md hover:ring-2 hover:ring-indigo-400'>
            <div className='aspect-video w-full overflow-hidden bg-gray-200'>
                {imageUrl && !imageFailed ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className='h-full w-full object-cover'
                        onError={() => setImageFailed(true)}
                    />
                ) : (
                    <div className='flex h-full w-full items-center justify-center text-sm text-gray-600'>
                        {imageFallbackText}
                    </div>
                )}
            </div>
            <div className='p-4'>
                <h2 className='text-lg font-semibold leading-snug'>{title}</h2>
            </div>
        </article>
    </Link>
  )
}

export default PostCard
