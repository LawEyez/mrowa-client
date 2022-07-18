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