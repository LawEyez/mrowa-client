import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"


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
      
    </Page>
  )
}

export default OurProcess

interface IData {

}

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/our-process')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}