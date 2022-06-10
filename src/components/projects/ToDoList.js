import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import mockupa from "../../resources/mockups/mockup2.png"
import mockupb from "../../resources/mockups//toDoList2.png"

export const ToDoList = () => {
  return (
    <div className="h-screen grid grid-cols-2 items-center md:-mt-40 -mt-64">
      <div className="flex flex-col">
        
        <div className="ml-5 md:ml-20">
        <a href="https://to-do-list-eliaritzmann.netlify.app/" target="_blank"><h1 className="text-4xl md:text-8xl mb-12  font-mono transition-transform hover:translate-x-2">To-do List</h1></a>
        <div className="flex mb-6">
          <a href="https://portfolio.bbbaden.ch/view/view.php?t=YGioEkngzTWxXty1hqUm" className="md:text-4xl" target="_blank">Portfolio</a>
          <p className="mx-2 md:text-4xl">•</p>
          <a href="https://github.com/EliaRitzmann/firebase-firestore-to-do-list" target="_blank" className="md:text-4xl">GitHub</a>
        </div>
        <p className="md:text-4xl">Eine Web-App zum erstellen von Tasks, welche ich mit React und Firebase programmiert habe.</p>
        </div>
        
      </div>
      <div className="flex justify-center">
        <Parallax speed={40} className="mr-24 w-5/6">
            <img src={mockupb} alt="Mockup" className="w-full hidden md:block"/>
          </Parallax>
          <Parallax speed={80} className="absolute">
            <img src={mockupa} alt="Mockup" className="w-72 ml-24"/>
          </Parallax>
          
      </div>
      
    </div>
  )
}
