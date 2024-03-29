import { ReactNode } from "react"

import SEO, { SEOProps } from "@components/SEO"
import Navigation from "@components/Navigation"
import Header from "@components/Header"
import Image from "next/image"


type PageProps = {
  meta?: SEOProps,
  children?: ReactNode
}

const Page = ({
  meta,
  children
}: PageProps) => {
  return (
    <>
      <SEO {...meta} />

      <Header />
      <Navigation />

      <main className="relative bg-neutral-900 text-white h-screen w-full">
        <div className=" lg:absolute lg:right-0 lg:w-[calc(100%-13rem)] lg:h-[calc(100%-5rem)] lg:mt-20">
          {/* <img
            className='absolute w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="home_cover"
          /> */}

          <Image
            className='object-cover'
            src={'https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            alt="home"
            // width={`100%`}
            // height={`100%`}
            objectFit='cover'
            layout='fill'
          />

          <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black/80 to-black/40
          flex flex-col gap-8 lg:gap-12 items-center justify-center p-4">

            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default Page