import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"
import Slider from "@components/Slider"

import { ISection } from "@utils/types"


const OurProcess: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Page
      meta={{
        title: 'Our Process',
        desc: 'Our approach to building and construction.'
      }}
    >
      <Slider>
        {data.sub_sections.map((section: any) => (
          <div
            key={section.id}
            className='w-72 xl:w-96'
          >
            <h2 className="text-6xl tracking-tighter font-bold
            after:content[''] after:block after:w-16 after:h-[1px]
            after:bg-white after:my-4">
              {section.title}
            </h2>

            <p className="text-gray-200">{section.content}</p>
          </div>
        ))}
      </Slider>
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