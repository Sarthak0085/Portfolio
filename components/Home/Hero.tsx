import React from 'react';
import Particle from './Particle';
import TextAnimation from './TextAnimation';
import Image from 'next/image';
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-center bg-cover">
          <Particle />
          <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
              <div>
                  <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                    Hello, I&apos;M
                    <span className='text-orange-500 px-5 uppercase'>Sarthak!</span>
                 </h1>
                  <TextAnimation />
                  <p className='text-[20px] mt-[2rem] text-[#ffffff92]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum vero cupiditate nesciunt voluptatum sapiente maiores
                      praesentium! Sapiente veniam porro ratione numquam sint odit laboriosam, harum, modi adipisci quam atque!
                  </p>
                  <div className='space-y-6 mt-[2rem] flex-col sm:space-y-0 sm:space-x-6 sm:flex sm:flex-row sm:items-center'>
                      <button className='px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex items-center text-black bg-blue-200 space-x-2'>
                          <p >Download CV</p>
                          <FiDownload className="h-[1.7rem] w-[1.6rem] text-black" />
                      </button>
                      <button className='px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex items-center text-black bg-blue-200 space-x-2 w-[230px] justify-center'>
                          <FaGithub className="h-[1.7rem] w-[1.6rem] text-black" />
                          <p >Github</p>
                      </button>
                  </div>
              </div>
              <div className='w-[500px] h-[500px] shadow-2xl shadow-orange-500 hidden relative lg:flex items-center rounded-full bg-[#55e6a5]'>
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