import React from 'react'

import { ContentProps } from './types'


const Content = ({
  title,
  content,
  next,
  prev
}: ContentProps) => {
  return (
    <div className="md:w-[60%] lg:w-[50%] lg:absolute lg:right-0
    lg:bottom-0 h-[80%] lg:h-full flex flex-col">
      <div className="bg-gray-800 p-8 text-center">
        <h1 className="text-4xl font-bold uppercase
        tracking-widest">
          {title}
        </h1>
      </div>

      <div className="h-full overflow-y-scroll leading-8
      text-xl font-light bg-mbw-gray text-gray-900 p-8">
        {content}

        {next && prev && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="uppercase text-sm font-bold"
              onClick={prev}
            >{'<<'} previous</button>
            <button
              className="uppercase text-sm font-bold"
              onClick={next}
            >next{'>>'}</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Content