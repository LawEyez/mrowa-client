import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"


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
    </Page>
  )
}

export default OurTeam

interface IData {

}

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/our-team')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}