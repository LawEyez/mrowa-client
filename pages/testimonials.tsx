import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"


const Testimonials: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: 'Testimonials',
        desc: 'What our customers say about us.'
      }}
    >
    </Page>
  )
}

export default Testimonials

interface IData {

}

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/testimonials')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}