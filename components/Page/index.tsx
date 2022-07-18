import { ReactNode } from "react"

import SEO, { SEOProps } from "@components/SEO"
import Navigation from "@components/Navigation"


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

      <Navigation />

      <main className="relative bg-neutral-900 text-white min-h-screen w-full">
        <div className="relative w-full h-screen">
          <img
            className='absolute w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="home_cover"
          />

      {/* <Image
            className='object-cover'
            src={'https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            alt="home"
            // width={`100%`}
            // height={`100%`}
            objectFit='cover'
            layout='fill'
          /> */}

          <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black/80 to-black/40
          flex items-center justify-center p-4">

            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default Page