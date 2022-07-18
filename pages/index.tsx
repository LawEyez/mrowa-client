import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Page from '@components/Page'
import Slider from '@components/Slider'


const Home: NextPage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: 'Home',
        desc: 'Welcome to Mrowa Building Workshop.'
      }}
    >
      <Slider>
        {data?.map((item: any, i: number) => (
          <div
            key={i}
            className="mx-auto sm:pr-0 text-center w-full lg:w-[50%] xl:w-[40%] flex-shrink-0"
          >
            <h1 className="text-6xl lg:text-7xl font-semibold tracking-tighter">{item.title}.</h1>
            <p className="mt-8 text-neutral-300">we sculpture entire cities.</p>
          </div>
        ))}
      </Slider>
    </Page>
  )
}

export default Home

interface HomeData {
  id: number,
  title: string,
  image: string
}

export const getStaticProps: GetStaticProps = async () => {
  const data: HomeData[] = await fetch('https://mbw-site.herokuapp.com/api/v1/home/')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}