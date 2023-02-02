import React from 'react'
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

        {/* ----- Project 1 ------ */}

      <div className='flex relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]/80'>

          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen'>

            <picture 
                className='h-64 w-64 md:h-50 md:w-50'>
              <motion.img
              initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }} src="https://thumbs.dreamstime.com/b/banner-illustration-e-commerce-icon-set-e-commerce-background-icon-illustration-banner-209696030.jpg" alt="" 
              />
            </picture>

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='text-orange-300	color: rgb(253 186 116);'>
                  Case  Study 1 of 2:
                </span>{" "} 
                 E-commece Website{" "}
                  <div className='items-center justify-center scroll-smooth scroll-m-0 flex space-x-2 my-1 animate-pulse'>

                    <picture className='h-10 w-10 rounded-full'>
                      <img 
                        src="https://img.icons8.com/color/512/html-5--v1.png" alt="html" 
                      />
                    </picture>

                    <picture className='h-10 w-10 rounded-full'>
                      <img 
                        src="https://img.icons8.com/fluency/512/css3.png" alt="html" 
                      />
                    </picture>

                    <picture className='h-10 w-10 rounded-full'>
                      <img 
                        src="https://img.icons8.com/color/512/javascript.png" alt="html" 
                      />
                    </picture>

                    <picture className='h-10 w-10 rounded-full'>
                      <img 
                        src="https://img.icons8.com/color/512/visual-studio-code-2019.png" alt="html" 
                      />
                    </picture>
                  </div>
              </h4>

              <p className='text-sm text-center xl:indent-8 md:text-left md:text-xm'>
              The website boasts a range of features such as product listings, shopping cart, and checkout process, powered by JavaScript for a dynamic and interactive experience. Layout and design of the website is built using CSS, ensuring that it is visually appealing and responsive to different screen sizes. HTML provides the structure and content of the website. Overall, the e-commerce website is designed to provide a user-friendly shopping experience, with a focus on functionality and design. <br/>
              <button
                className='text-sm object-center items-center text-center justify-center font-bold subpixel-antialiased text-orange-300 color: rgb(253 186 116); no-underline hover:underline decoration-dashed underline-offset-4 hover:text-blue-300 transition duration-500 ease-in-out transform hover:scale-110'
                onClick={() => window.open('https://raj113193.github.io/shop-lift.github.io/', '_blank', 'noreferrer')}>
                  [ See Live ]
              </button>{" "} {" "}
              <button
                className='text-sm object-center items-center text-center justify-center font-bold subpixel-antialiased text-orange-300 color: rgb(253 186 116); no-underline hover:underline decoration-dashed underline-offset-4 hover:text-blue-300 transition duration-500 ease-in-out transform hover:scale-110'
                onClick={() => window.open('https://github.com/Raj113193/shop-lift.github.io', '_blank', 'noreferrer')}>
                  [ Source Code ]
              </button>
              </p>
            </div>
          </div>

        {/* ----- Project 2 ------ */}

          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen'>

            <picture className='h-64 w-64 md:h-50 md:w-50'>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
              />
            </picture>


            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='text-orange-300	color: rgb(253 186 116);'>
                  Case  Study 2 of 2:
                </span>{" "} 
                Music Player(Android){" "}
                <div className='items-center justify-center scroll-smooth scroll-m-0 flex space-x-2 my-1 animate-pulse'>
                  
                <picture className='h-10 w-10 rounded-full'>
                <img 
                  src="https://img.icons8.com/nolan/512/java-coffee-cup-logo.png" alt="java" 
                />
                </picture>

                <picture className='h-10 w-10 rounded-full'>
                  <img 
                    className='h-10 w-10 rounded-full'
                    src="https://img.icons8.com/color/512/android-studio--v3.png" alt="android-studio" 
                  />
                </picture>

                <picture className='h-10 w-10 rounded-full'>
                  <img
                    src="https://img.icons8.com/external-outline-black-m-oki-orlando/512/external-sdk-android-app-development-outline-outline-black-m-oki-orlando.png" alt="SDK" 
                  />
                </picture>
              </div>
              </h4>

              <p className='text-sm text-center xl:indent-8 md:text-left md:text-xm'>
              It includes features such as the ability to play, pause, and skip songs, as well as browse your music library. The app has a user-friendly interface with features such as album art and song information display. It utilizes the Android SDK and is designed to work seamlessly on Android devices, providing an optimal music listening experience for users on the go. <br/>
              <button
                className='text-sm object-center items-center text-center justify-center font-bold subpixel-antialiased text-orange-300 color: rgb(253 186 116); no-underline hover:underline decoration-dashed underline-offset-4 hover:text-blue-300 transition duration-500 ease-in-out transform hover:scale-110'
                onClick={() => window.open('https://github.com/Raj113193/Music-Player', '_blank', 'noreferrer')}>
                  [ Source Code ]
              </button>
              </p>
            </div>
          </div>
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}