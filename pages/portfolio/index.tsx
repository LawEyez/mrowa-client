import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"
import Grid from "@components/Grid"


const Portfolio: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: 'Portfolio',
        desc: 'Our building and construction projects.'
      }}
    >
      <Grid
        title="portfolio"
        items={data}
      />
    </Page>
  )
}

export default Portfolio

export interface IProject {
  id: number,
  url: string,
  title: string,
  description: string,
  image: string,
  other_images: {
    id: number,
    project: number,
    image: string
  }[]
}


export const getStaticProps: GetStaticProps = async () => {
  const data: IProject[] = await fetch('https://mbw-site.herokuapp.com/api/v1/portfolio/')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}