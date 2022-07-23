import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { useEffect, useMemo, useState } from "react"

import Page from "@components/Page"
import Content from "@components/Content"

import { ISection } from "@utils/types"


const WhatWeDo: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
    <Page
      meta={{
        title: 'What We Do',
        desc: 'Our building and construction products and services.'
      }}
    >
      <Content
        title={item.sub_title}
        content={item.content}
        next={handleNext}
        prev={handlePrev}
      />
    </Page>
  )
}

export default WhatWeDo



export const getStaticProps: GetStaticProps = async () => {
  const data: ISection = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/what-we-do')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}