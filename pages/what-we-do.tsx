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

    </Page>
  )
}

export default WhatWeDo

interface IData {

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