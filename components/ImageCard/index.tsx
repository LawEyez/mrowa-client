import React from 'react'

import { ImageCardProps } from './types'


const ImageCard = ({
  item
}: ImageCardProps) => {
  return (
    <div className='space-y-4'>
      <div className="">
        <img
          className="rounded-lg h-60 w-full object-cover shadow"
          src={item.image}
          alt={item.title}
        />
      </div>
      <h2 className="text-2xl font-medium tracking-tight">{item.title}</h2>
    </div>
  )
}

export default ImageCard