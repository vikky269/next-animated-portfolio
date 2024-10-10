"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navlinks = ({link}) => {

const pathName = usePathname()


  return (
    <Link href={link.url} className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`}>{link.title}</Link>
  )
}

export default Navlinks
