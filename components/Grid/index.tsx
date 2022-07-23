import ImageCard from '@components/ImageCard'
import Link from 'next/link'
import React from 'react'

import { GridProps } from './types'


const Grid = ({
  title,
  items,
  isLinked
}: GridProps) => {
  return (
    <div className="h-full py-12 pl-4 w-full overflow-y-scroll bg-white text-gray-900">
      <h1 className="font-bold tracking-tighter capitalize text-4xl mb-8">
        {title}
      </h1>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap
      pr-4 overflow-y-scroll">
        {isLinked ? items.map((item: any) => (
          <ImageCard
            key={item.id}
            item={item}
          />
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
    </div>
  )
}

export default Grid