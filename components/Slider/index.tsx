import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'

import { SliderProps } from './types'

import SliderButton from '@components/SliderButton'


const Slider = ({
  children
}: SliderProps) => {

  // Create embla carousel ref.
  const [emblaRef, embla] = useEmblaCarousel()

  // Configure state for buttons.
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  // Scroll to previous or next item.
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  // On button select.
  const onSelect = useCallback(() => {
    if (!embla) return;

    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return;

    embla.on('select', onSelect)
    onSelect();

  }, [embla, onSelect])

  return (
    <>
      <div
        ref={emblaRef}
        className='overflow-hidden w-[90%] xl:w-full'
      >
        <div className="flex items-center flex-shrink-0 gap-20">
          {children}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <SliderButton
          active={prevBtnEnabled}
          icon={<CgArrowLongLeft />}
          handleClick={scrollPrev}
        />
        
        <SliderButton
          active={nextBtnEnabled}
          icon={<CgArrowLongRight />}
          handleClick={scrollNext}
        />
      </div>
    </>
  )
}

export default Slider