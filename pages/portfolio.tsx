import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@components/Page"

import { ISection } from "@utils/types"


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
      <div className="h-full py-12 pl-4 w-full overflow-y-scroll bg-white text-gray-900">
        <h1 className="font-bold tracking-tighter capitalize text-4xl mb-8">
          portfolio
        </h1>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap
        pr-4 overflow-y-scroll">
          {data?.sub_sections.map((section: any) => (
            <div
              key={section.id}
              className='space-y-4'
            >
              <div className="">
                <img
                  className="rounded-lg h-60 w-full object-cover shadow"
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt="img_holder"
                />
              </div>
              <h2 className="text-2xl font-medium tracking-tight">{section.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default Portfolio



export const getStaticProps: GetStaticProps = async () => {
  const data: ISection = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/what-we-do')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}