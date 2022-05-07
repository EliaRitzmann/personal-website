import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Link from 'react-scroll/modules/components/Link'

export const Welcome = () => {
    
  return (
    <div id='welcome' className='h-screen flex justify-center items-center flex-col'>
      <div className='absolute top-6 right-20 text-xl font-semibold dark:text-purple-600 text-black'>{"Toggle Color ->"}</div>
      <div className='flex justify-center flex-col'>
      <h1 className='text-6xl text-center dark:text-orange-500 mb-4'>Elia Ritzmann</h1>
      <h1 className='text-3xl text-center'>React and React native developer.</h1>
      </div>
      <Link
        className="text-2xl font-semibold flex justify-center content-end absolute bottom-8 animate-bounce cursor-pointer"
        activeClass="text-black"
        to="aboutMe"
        spy={true}
        smooth={true}
        offset={0}
        duration={1250}
      ><svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
      </Link>
    </div>
  )
}

/*
*/
