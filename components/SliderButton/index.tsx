import React from 'react'

import { SliderButtonProps } from './types'


const SliderButton = ({
  icon,
  handleClick,
  active
}: SliderButtonProps) => {
  const inactiveStyles = !active && 'opacity-20 hover:bg-transparent hover:text-white'

  return (
    <button
      className={`w-12 h-12 border border-white rounded-full
      text-white hover:text-gray-900 hover:bg-white
      duration-200 transition flex items-center justify-center
      text-2xl ${inactiveStyles} outline-none`}
      onClick={handleClick}
    >
      {icon}
    </button>
  )
}

export default SliderButton