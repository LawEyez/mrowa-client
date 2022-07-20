import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"
import { ISection } from "@utils/types"


const OurTeam: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: 'Our Team',
        desc: 'Members of our team at Mrowa Building Workshop.'
      }}
    >
      <div className="md:w-[60%] lg:w-[50%] lg:absolute lg:right-8">
        <h1 className="text-6xl tracking-tighter font-bold">{data.title}</h1>

        <div className="mt-8 h-96 overflow-y-scroll leading-8
        text-xl font-light bg-gray-900/80 p-8 rounded-lg">
          {data.content}
        </div>
      </div>
    </Page>
  )
}

export default OurTeam


export const getStaticProps: GetStaticProps = async () => {
  const data: ISection = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/our-team')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}