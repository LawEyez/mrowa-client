import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"


const WhatWeDo: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: 'What We Do',
        desc: 'Our building and construction products and services.'
      }}
    >
      <div className="grid grid-col-1 md:grid-cols-2 gap-6 flex-wrap lg:w-[60%] xl:w-[50%]
      h-full py-12 pr-4 overflow-y-scroll">
        {data?.sub_sections.map((section: any) => (
          <div
            key={section.id}
            className='rounded-xl bg-gray-900/90 border border-gray-700 p-6'
          >
            <h2 className="text-4xl font-semibold tracking-tight">{section.title}</h2>
            <p className="mt-4 text-gray-300">{section.content}</p>
          </div>
        ))}
      </div>
    </Page>
  )
}

export default WhatWeDo

interface IData {
  id: number,
  url: string,
  title: string,
  content: string,
  image: string,
  sub_sections: ISubSection[]
}

interface ISubSection {
  id: number,
  section: number,
  title: string,
  sub_title: string,
  content: string,
  image: string,
  date_created: string
}

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/what-we-do')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}