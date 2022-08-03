import React, { useState } from 'react'
import Link from 'next/link'

import ImageCard from '@components/ImageCard'

import { GridProps } from './types'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css';


const Grid = ({
  title,
  items,
  isLinked
}: GridProps) => {
  const [open, setOpen] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)

  const handleImageClick = (i: number) => {
    setOpen(true)
    setImgIndex(i)
  }

  return (
    <div className="h-full py-12 pl-4 w-full overflow-y-scroll bg-white text-gray-900">
      <h1 className="font-bold tracking-tighter capitalize text-4xl mb-8">
        {title}
      </h1>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap
      pr-4 overflow-y-scroll">
        {isLinked ? items.map((item: any, i: number) => (
          <div
            key={item.id}
            onClick={() => handleImageClick(i)}
          >
          <ImageCard
            item={item}
          />
          </div>
        )) : items.map((item: any) => (
          <Link key={item.id} href={`/portfolio/${item.url}`} passHref>
            <div className="cursor-pointer">
              <ImageCard
                item={item}
              />
            </div>
          </Link>
        ))}
      </div>

      {open && (
        <Lightbox
          mainSrc={items[imgIndex].image}
          nextSrc={items[(imgIndex + 1) % items.length].image}
          prevSrc={items[(imgIndex + items.length - 1) % items.length].image}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setImgIndex((imgIndex + items.length - 1) % items.length)}
          onMoveNextRequest={() => setImgIndex((imgIndex + 1) % items.length)}
        />
      )}
    </div>
  )
}

export default Grid