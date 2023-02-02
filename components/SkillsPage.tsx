import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft?: boolean;}

export default function SkillsPage({}: Props) {
  return (
    <motion.div 
      initial= {{ opacity: 0 }}
      whileInView= {{ opacity: 1.5 }}
      transition= {{ duration: 1.5 }}
      className='flex relative flex-col text-center pt-10 md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:spae-y-0 mx-auto items-center'>

        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for name of the skill</h3>

      <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition= {{
        duration: 1.2,
      }}
      whileInView = {{ opacity: 1, x: 0 }}
      viewport= {{ once: true }} className='grid grid-cols-4 gap-5 mx-auto'>

        {/* Typescript */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src="https://img.icons8.com/fluency/512/typescript--v2.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                TypeScript
              </p>
            </div>
          </div>
        </div>

        {/* CSS */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src="https://img.icons8.com/fluency/512/css3.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                CSS
              </p>
            </div>
          </div>
        </div>

        {/* HTML */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src="https://img.icons8.com/color/512/html-5.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                HTML
              </p>
            </div>
          </div>
        </div>

        {/* JavaScript */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src="https://img.icons8.com/color/512/javascript.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                JavaScript
              </p>
            </div>
          </div>
        </div>

        {/* Node Js */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src="https://img.icons8.com/fluency/512/node-js.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                Node Js
              </p>
            </div>
          </div>
        </div>

        {/* Kotlin */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src="https://img.icons8.com/color/512/kotlin.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                Kotlin
              </p>
            </div>
          </div>
        </div>

        {/* VS Code */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src="https://img.icons8.com/color/512/visual-studio-code-2019.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                Vs Code
              </p>
            </div>
          </div>
        </div>

        {/* Android Studio */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src= "https://img.icons8.com/color/512/android-studio--v3.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                Android Studio
              </p>
            </div>
          </div>
        </div>

        {/* Java */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src= "https://img.icons8.com/nolan/512/java-coffee-cup-logo.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                Java
              </p>
            </div>
          </div>
        </div>

        {/* React */}

        <div className='group relative flex cursor-pointer'>
          <motion.img 
          src= "https://img.icons8.com/office/256/react.png"
          className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse'
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-1xl font-bold text-black opacity-100'>
                React
              </p>
            </div>
          </div>
        </div>

      </motion.div>

    </motion.div>
  );
}