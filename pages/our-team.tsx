import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"
import Content from "@components/Content"

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
      <Content
        title={data.title}
        content={data.content}
      />
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