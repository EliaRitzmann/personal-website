import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import mockupa from "../../resources/mockups/statify1.mockup.png"
import mockupb from "../../resources/mockups/Statify2_mockup.png"

export const Statify = () => {
  return (
    <div className="h-screen grid grid-cols-2 items-center md:-mt-40 -mt-64">
      <div className="flex flex-col">
        
        <div className="ml-5 md:ml-20">
        <a href=""><h1 className="text-4xl md:text-8xl mb-12  font-mono">Statify</h1></a>
        <div className="flex mb-6">
          <a href="" className="md:text-4xl">Portfolio</a>
          <p className="mx-2 md:text-4xl">•</p>
          <a href="" className="md:text-4xl">GitHub</a>
        </div>
        <p className="md:text-4xl">Eine Web-App zum einsehen der meisst gehörten Lieder und Künstler der App Spotify.</p>
        </div>
        
      </div>
      <div className="flex justify-center items-center">
          <Parallax speed={40} className="pt-48">
            <img src={mockupa} alt="" className="w-full"/>
          </Parallax>
          <Parallax speed={10} >
            <img src={mockupb} alt="" className="w-full hidden md:block"/>
          </Parallax>
      </div>
      
    </div>
  )
}
