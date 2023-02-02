import Link from 'next/link';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {

  // const {
  //   register,
  //   handleSubmit,
  // } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = 'mailto:rajbhartirb0000@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})';
  // };

  return (

    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-2xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='text-orange-300	color: rgb(253 186 116);'>
            Let&apos;s Talk.
          </span> 
        </h4>

        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse text-[#F7AB0A]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <p className='text-1xl lining-nums'>
              +919958668509
            </p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse text-[#F7AB0A]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
              />
            </svg>
            <p className='text-1xl'>
              rajbhartirb0000@gmail.com
            </p>
          </div>
          

          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse text-[#F7AB0A]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className='text-1xl'>
              Gurgaon, Haryana-122505, INDIA
            </p>
          </div>
        </div>

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input 
             {...register('name')}
             placeholder='Name' 
             className='contactInput' 
             type="text" 
            />

            <input 
             {...register('email')}
             placeholder='Email' 
             className='contactInput' 
             type="email" 
            />
          </div>

          <input 
           {...register('subject')}
           placeholder='Subject' 
           className='contactInput' 
           type="text" 
          />

          <textarea 
           {...register('message')}
           placeholder='Message' 
           className='contactInput'  
          />

          <button 
          type='submit' 
          className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg animate-pulse'>
            Submit
          </button>
        </form> */}

        <Link href="#hero">
        <footer className='sticky bottom-0 w-full cursor-pointer p-5 items-start max-w-7xl mx-auto z-20 xl:items-center'>
          <div className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-[#F7AB0A] rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-bounce">
            <path fillRule="evenodd" d="M10 15a.75.75 0 01-.75-.75V7.612L7.29 9.77a.75.75 0 01-1.08-1.04l3.25-3.5a.75.75 0 011.08 0l3.25 3.5a.75.75 0 11-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0110 15z" clipRule="evenodd" 
            />
            </svg>
          </div>
        </footer>
      </Link>
      </div>
    </div>
  );
}