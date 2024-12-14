"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navlinks from './Navlinks'
import { motion } from 'framer-motion'


const Navbar = () => {

const [open ,setOpen] = useState(false)


const topVariants = {
  closed:{
   rotate:0,
  },
  opened:{
   rotate:45,
   backgroundColor:"rgb(255, 255, 255)"
  }
}
const centerVariants = {
  closed:{
   opacity:1,
  },
  opened:{
   opacity:0
  }
}

const bottomVariants = {
  closed:{
   rotate:0,
  },
  opened:{
   rotate:-45,
   backgroundColor:"rgb(255, 255, 255)"
  }
}

const listVariants = {
  closed:{
    x: "100vw"
  },
  opened:{
    x: 0,
    transition:{
      when:"beforeChildren",
      staggerChildren:0.2
    }
  },
  
}

const listItemVariants  = {
  closed:{
    x: -10,
    opacity:0
  },
  opened:{
    x:0,
    opacity:1
  }
}



    const links = [
        {url: "/", title: "Home"},
        {url: "/about", title: "About"},
        {url: "/portfolio", title: "Portfolio"},
        {url: "/contact", title: "Contact"},
    ]

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
     
    {/* LINKS */}

     <div className="hidden md:flex gap-4 w-1/3 text-xl">
     {links.map((link)=>(
           <Navlinks link={link} key={link.title}/>
        )
            )}
     </div>


     {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
         <Link  href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
         <span className='text-white mr-2'>Amune</span>
         <span className='bg-white text-black rounded w-12 h-8 flex items-center justify-center'>.dev</span>
         </Link>
      </div>

  {/* SOCIALS */}

      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/git.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
     

      {/* responsive menu */}
      <div className="md:hidden">
         <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={()=>setOpen(!open)}>
            <motion.div  
            variants={topVariants}  
            className='w-10 h-1 bg-black rounded origin-left'
            animate={open ? "opened" :"closed" }
            ></motion.div>
            <motion.div  
            variants={centerVariants} 
            className='w-10 h-1 bg-black rounded'
            animate={open ? "opened" :"closed" }
            ></motion.div>
            <motion.div 
             variants={bottomVariants} 
             className='w-10 h-1 bg-black rounded origin-left'
             animate={open ? "opened" :"closed" }
              ></motion.div>
        </button>      
      </div>

      {/* menu list */}
      {open && <motion.div 
      // variants={listVariants}
      // initial="closed"
      // animate="opened"
      className='inset-0 absolute overflow-hidden w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-40 text-4xl'>
        {links.map((link)=>(
            <motion.div key={link.title} variants={listItemVariants}>
              <Link href={link.url} onClick={()=>setOpen(!open)}>{link.title}</Link>
            </motion.div>
        )
            )}
      </motion.div>}
    </div>
  )
}

export default Navbar
//absolute h-screen w-screen top-0 left-0