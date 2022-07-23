import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { IProject } from '.'

import Grid from '@components/Grid'
import Page from '@components/Page'


const SingleProject = ({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: project.title,
        desc: project.description
      }}
    >
      <Grid
        title={project.title}
        items={project.other_images}
        isLinked
      />
    </Page>
  )
}

export default SingleProject

interface IParams extends ParsedUrlQuery {
  projectUrl: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: IProject[] = await fetch('https://mbw-site.herokuapp.com/api/v1/portfolio/')
    .then(res => res.json())

  /** Paths to pre-render */
  const paths = projects.map(project => (
    {
      params: { projectUrl: project.url }
    }
  ))

  return {
    paths,
    fallback: false // Other routes not in paths should 404.
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  /** Get project url from params */
  const { projectUrl } = context.params as IParams

  /** Fetch project from api */
  const project: IProject = await fetch(`https://mbw-site.herokuapp.com/api/v1/portfolio/${projectUrl}`)
    .then(res => res.json())

  return {
    props: {
      project
    }
  }
}