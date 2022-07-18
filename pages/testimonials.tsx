import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Image from "next/image"

import Page from "@components/Page"
import Slider from "@components/Slider"

import { ISection, ISubSection } from "@utils/types"


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
      <Slider>
        {data.sub_sections.map((section: ISubSection) => (
          <div
            key={section.id}
            className='flex flex-col items-start p-4 bg-white rounded-lg
            gap-4 w-96 text-gray-900'
          >
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-full object-cover overflow-hidden flex-shrink-0">
                <img
                className="w-full h-full object-cover"
                  src={section.image}
                  alt={section.title}
                />
              </div>

              <div>
                <h2 className="font-semibold text-xl">
                  {section.title}
                </h2>
                <h4 className="mt-1">{section.sub_title}</h4>
              </div>
            </div>

            <p className="text-gray-700 text-sm">{section.content}</p>
          </div>
        ))}
      </Slider>
    </Page>
  )
}

export default Testimonials

export const getStaticProps: GetStaticProps = async () => {
  const data: ISection = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/testimonials')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}