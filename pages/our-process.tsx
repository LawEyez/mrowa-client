import { useEffect, useMemo, useState } from "react"
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"
import Slider from "@components/Slider"

import { ISection } from "@utils/types"
import Content from "@components/Content"


const OurProcess: NextPage = ({
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
        title: 'Our Process',
        desc: 'Our approach to building and construction.'
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

export default OurProcess


export const getStaticProps: GetStaticProps = async () => {
  const data: ISection = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/our-process')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}