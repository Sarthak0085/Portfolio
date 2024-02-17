import React from 'react';
import Particle from './Particle';
import TextAnimation from './TextAnimation';
import Image from 'next/image';
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Hero = () => {
  return (
      <div id='home' className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-center bg-cover">
          <Particle />
          <div className='w-[80%] 1150:w-[90%] grid-cols-1 mx-auto grid 1150:grid-cols-2 gap-[3rem] h-[100%] items-center'>
              <div>
                  <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                    Hello, I&apos;M
                    <span className='text-orange-500 px-5 uppercase'>Sarthak!</span>
                 </h1>
                  <TextAnimation />
                  <p className='text-[20px] mt-[2rem] text-[#ffffff92]'>
                      I&apos;m a fresher MERN stack developer and web enthusiast, eager to learn and create exciting web projects.
                      Passionate about coding and exploring new technologies, I strive to build user-friendly and efficient web
                      applications. Excited to contribute to the ever-evolving world of web development.
                  </p>
                  <div className='space-y-6 mt-[2rem] flex-col sm:space-y-0 sm:space-x-6 sm:flex sm:flex-row sm:items-center'>
                      <a href='images/Sarthak_Resume.pdf'
                          download="Sarthak_Resume.pdf"
                          target='_blank'
                          className='px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex  text-black bg-blue-200 space-x-2'>
                           Download CV
                          <FiDownload className="h-[1.7rem] w-[1.6rem] text-black" />
                      </a>
                      <a href={'https://github.com/Sarthak0085/'} className='px-[2rem] gap-2 hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex text-black bg-blue-200 w-[230px] justify-center'>
                              <FaGithub className="h-[1.5rem] w-[1.6rem] text-black" />
                              Github
                          </a>
                  </div>
              </div>
              <div className='w-[500px] h-[500px] shadow-2xl shadow-orange-500 hidden relative 1150:flex items-center rounded-full bg-[#55e6a5]'>
                  <Image
                      src="/images/u1.jpg"
                      alt="users"
                      layout="fill"
                      className="object-cover rounded-full"
                  />
              </div>
          </div>
    </div>
  )
}

export default Hero