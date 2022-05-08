import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import mockupa from "../../resources/mockups/mockup2.png"
import mockupb from "../../resources/mockups//toDoList2.png"

export const ToDoList = () => {
  return (
    <div className="h-screen grid grid-cols-2 items-center md:-mt-40 -mt-64">
      <div className="flex flex-col">
        
        <div className="ml-5 md:ml-20">
        <a href=""><h1 className="text-4xl md:text-8xl mb-12  font-mono">To-do List</h1></a>
        <div className="flex mb-6">
          <a href="" className="md:text-4xl">Portfolio</a>
          <p className="mx-2 md:text-4xl">•</p>
          <a href="" className="md:text-4xl">GitHub</a>
        </div>
        <p className="md:text-4xl">Eine Web-App zum erstellen von Tasks, welche ich mit React und Firebase programiert habe.</p>
        </div>
        
      </div>
      <div className="flex justify-center">
          <Parallax speed={40} className="pt-48">
            <img src={mockupa} alt="" className="w-80"/>
          </Parallax>
          <Parallax speed={80} >
            <img src={mockupb} alt="" className="w-full"/>
          </Parallax>
      </div>
      
    </div>
  )
}
