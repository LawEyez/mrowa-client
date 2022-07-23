import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"


const About: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: 'About Mrowa Building Workshop',
        desc: 'Learn more about Mrowa Building Workshop'
      }}
    >
      <div className="md:w-[60%] lg:w-[50%] lg:absolute lg:right-0
      lg:bottom-0 h-[80%] lg:h-full flex flex-col">
        <div className="bg-gray-800 p-8 text-center">
          <h1 className="text-4xl font-bold uppercase
          tracking-widest">
            {data.title}
          </h1>
        </div>

        <div className="h-full overflow-y-scroll leading-8
        text-xl font-light bg-gray-500/80 p-8">
          {data.content}
        </div>
      </div>
    </Page>
  )
}

export default About

interface IData {
  id: number,
  url: string,
  title: string,
  content: string,
  image: string
}

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/about-us')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}