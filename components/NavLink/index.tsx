import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavLinkProps } from './types'


const NavLink = ({
  name,
  path
}: NavLinkProps) => {
  // Get router.
  const router = useRouter()

  // Add active styles.
  const activeStyles = router.asPath === path && (
    'text-gray-900 bg-white'
  )

  return (
    <Link href={path} passHref>
      <a href="" className={`uppercase text-xs text-white hover:bg-white
    hover:text-gray-900 tracking-widest px-6 py-4 cursor-pointer ${activeStyles}
    duration-200 transition`}>
        {name}
      </a>
    </Link>
  )
}

export default NavLink