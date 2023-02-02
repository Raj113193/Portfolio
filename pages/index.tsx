import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Hero from '../components/Hero';
import About from '@/components/About';
// import WorkExperience from '@/components/WorkExperience';
import SkillsPage from '@/components/SkillsPage';
import Projects from './../components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
      
      <Head>
        <title>Raj | Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
       <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* <section id="experience" className='snap-center'>
        <WorkExperience />
      </section> */}

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <SkillsPage />
      </section>

      {/* Projects */}
   <section id='projects' className='snap-start'>
        <Projects />
      </section>   

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section> 


    </div>
  );
};
