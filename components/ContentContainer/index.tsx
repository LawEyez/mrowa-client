import React, { useEffect, useMemo, useState } from 'react'

import Content from '@components/Content'

import { ContentContainerProps } from './types'


const ContentContainer = ({
  data,
  renderProps
}: ContentContainerProps) => {
  const [index, setIndex] = useState(0)
  const [item, setItem] = useState(data.sub_sections[0])

  const len = useMemo(() => data.sub_sections.length, [data])

  useEffect(() => {
    setItem(data.sub_sections[index])
  }, [index, data.sub_sections])

  const handleNext = () => {
    if (index < len - 1 ) {
      setIndex(prev => (prev + 1))
    }
  }
  
  const handlePrev = () => {
    if (index > 0) {
      setIndex(prev => (prev - 1))
    }
  }
  return (
    <>
    {renderProps(item)}
    </>
  )
}

export default ContentContainer