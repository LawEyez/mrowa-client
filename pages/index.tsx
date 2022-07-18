import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Page from '@components/Page'


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
      <div className="mx-auto pr-4 sm:pr-0 text-center w-[80%] md:w-[50%] xl:w-[40%]">
        <h1 className="text-6xl lg:text-7xl font-semibold tracking-tighter">{data[0].title}.</h1>
        <p className="mt-8 text-neutral-300">we sculpture entire cities.</p>
      </div>
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