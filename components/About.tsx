import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center'>

      <h3 className='absolute overflow-hidden overscroll-none top-20 top uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <div className='flex flex-col relative pt-10 h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <picture className='-mb-20 md:-mb-0 flex-shrink-0  w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[200px]'>
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition= {{
              duration: 1.2,
            }}
            whileInView = {{ opacity: 1, x: 0 }}
            viewport= {{ once: true }}

            className='-mb-20 md:-mb-0 flex-shrink-0  w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[200px]'
            src="https://nvbdbg.dm.files.1drv.com/y4mSVJHxi7e2VzqjjAUOMlj1W-E5RE3UnaVYlMdIwVU56JwnK-v0ltBM6q9QxiaB7lMXJWV4C-8hqD818jGmMd3BNB6p3kVQRoiUetPLjCh82UdbkSsX_oWFIOEwda_6ZoGoRXStAqzhiSOeyqP9wqp2j5KAVnr4tLFt6uvRz_a5t4GwLCVEGuxHjkG8iIf3Y9rKj1B6UxpHBhtc0S14Iar-Q/profile.jpg?psid=1"
            alt="Landscape picture"
          />
        </picture>


      <div className='space-y-10 px-0 pb-0 md:px-10'>
        <motion.h4
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition= {{ duration: 1.2, }}

            whileInView = {{ opacity: 1, x: 0 }}
            
            viewport= {{ once: true }}

            className='md:text-3xl lg:text-4xl font-semibold text-orange-300 subpixel-antialiased	color: rgb(253 186 116);'
            
            >Here&apos;s a little background
        </motion.h4>

        <motion.p
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition= {{ duration: 1.2, }}

            whileInView = {{ opacity: 1, x: 0 }}

            viewport= {{ once: true }}
            
           className='indent-8 text-base'
          >Hello, my name is {" "}

          <span className='text-orange-300 subpixel-antialiased	color: rgb(253 186 116); animate-pulse'>
            Raj Bharti
          </span>  {" "}

          and I am currently in my third year of pursuing a Bachelors in Computer Applications (BCA) at {" "}

          <a
           className='text-orange-300	color: rgb(253 186 116); no-underline hover:underline decoration-orange-120 underline-offset-4' onClick={() => window.open('https://www.dpgitm.ac.in/', '_blank', 'rel=noopener')}>
           DPG Institute of Technology and Management. 
          </a>{" "}

           As a student, I am always eager to learn about new technologies and ways to improve my skills. I have a strong background in programming, with a particular interest in web development and data science. I am a quick learner and adapt easily to new programming languages and tools. My goal is to excel in my field and I am dedicated to achieving it. <br />
          <button
          className='text-sm items-center text-center justify-center font-bold subpixel-antialiased text-orange-300 color: rgb(253 186 116); no-underline hover:underline decoration-dashed underline-offset-4 hover:text-blue-300 transition duration-500 ease-in-out transform hover:scale-110'
          onClick={() => window.open('https://drive.google.com/file/d/1DJMTU7SQ5SciINx67eu0Z5yIK-uHho4B/view?usp=sharing', '_blank', 'rel=noopener')}>
            [ Download Resume ]
          </button>
        </motion.p>
      </div>
      </div>


    </div>
    
  );
}
