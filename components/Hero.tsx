import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
      words: [
      "Hi, My name's Raj",
      "Designer",
      "Developer",
      ],
      loop: true,
      delaySpeed: 2000,
    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <picture>
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
          src="https://nvbdbg.dm.files.1drv.com/y4mSVJHxi7e2VzqjjAUOMlj1W-E5RE3UnaVYlMdIwVU56JwnK-v0ltBM6q9QxiaB7lMXJWV4C-8hqD818jGmMd3BNB6p3kVQRoiUetPLjCh82UdbkSsX_oWFIOEwda_6ZoGoRXStAqzhiSOeyqP9wqp2j5KAVnr4tLFt6uvRz_a5t4GwLCVEGuxHjkG8iIf3Y9rKj1B6UxpHBhtc0S14Iar-Q/profile.jpg?psid=1/account123" 
          alt="Profile Image"
        />
      </picture>

      <div className='z-20'>
        <h2 className='text-sm animate-bounce uppercase text-gray-500 pb-2 tracking-[10px]'>
          Software Engineer
        </h2>

        <h1 className='text-5xl lg:text-6l font-medium scroll-px-5'>
          <span className="mr-3">{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>

          <Link href="#about">
            <button className='heroButton transition duration-500 ease-in-out transform hover:scale-110'>
              About
            </button>
          </Link>

          {/* <Link href="#experience">
            <button className='heroButton transition duration-500 ease-in-out transform hover:scale-110'>
              Experience
            </button>
          </Link> */}
          
          <Link href="#skills">
            <button className='heroButton transition duration-500 ease-in-out transform hover:scale-110'>
              Skills
            </button>
          </Link>

          <Link href="#projects">
            <button className='heroButton transition duration-500 ease-in-out transform hover:scale-110'>
              Project
            </button>
          </Link>

          <Link href="#contact">
            <button className='heroButton transition duration-500 ease-in-out transform hover:scale-110'>
              Contact
            </button>
          </Link>

        </div>
      </div>
      
    </div>
  );
}