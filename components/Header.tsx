import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
type Props = {}

export default function Header({}: Props) {

  return ( 
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center animate-pulse">

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1.5,
        }}

      className="flex flex-row items-center">
        {/* Social Icons */}
        
        <SocialIcon
         url="https://instagram.com/rajgoswami.me" 
         className=' transition duration-500 ease-in-out transform hover:scale-110' 
         fgColor="gray"
         bgColor="transparent"
         target="_blank"
         rel="noreferrer"
        />

        <SocialIcon
         url="https://github.com/Raj113193" 
         className=' transition duration-500 ease-in-out transform hover:scale-110' 
         fgColor="gray"
         bgColor="transparent"
         target="_blank"
         rel="noreferrer"
        />

        <SocialIcon
         url="https://linkedin.com/in/rajbharti113193" 
         className=' transition duration-500 ease-in-out transform hover:scale-110' 
         fgColor="gray"
         bgColor="transparent"
         target="_blank"
         rel="noreferrer"
        />

      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1.5,
        }}

      className="flex flex-row items-center text-gray-300 cursor-pointer">

        <SocialIcon 
          url='mailto:rajbhartirb0000@gmail.com' 
          className="cursor-pointer transition duration-500 ease-in-out transform hover:scale-110"
          network="email"
          fgColor="grey"
          bgColor="transparent"
          target="_blank"
          rel="noreferrer"
        />

        <p
        className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>

      </motion.div>

    </header>
    
  ); 
}