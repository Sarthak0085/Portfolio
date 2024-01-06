import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

const About = () => {
  return (
      <div className='bg-[#121121] pt-[4rem] pb-[4rem] md:pt-[4rem]'>
           <h1 className='heading pb-[4rem]'>About <span className='text-orange-400'>Me</span></h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-[3rem] lg:justify-start justify-center items-center'>
              <div className='flex items-center mx-auto lg:mx-0 justify-center lg:justify-start flex-col'>
                  <h2 className='text-[25px] md:text-[35px] lg:text-[45px] leading-[2rem] md:leading-[3rem] capitalize 
                  mb-[3rem] font-bold text-white'>
                      Transforming <span className='text-orange-400'>Vision</span>
                  </h2>
                  <div className='mb-[3rem] flex justify-center lg:justify-start items-center md:space-x-10'>
                  <span className='w-[100px] hidden md:block bg-gray-400 h-[5px] rounded-md'></span>
                  <p className='text-[20px] text-slate-300 w-[80%]'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum veritatis officiis minima sunt reprehenderit
                      atque aspernatur culpa laudantium
                      nulla, eligendi quod eveniet? Dolorem maxime quidem, quas reprehenderit maiores obcaecati repudiandae!
                  </p>
                  </div>
                  <div className='space-y-6 mt-[2rem] flex-col sm:space-y-0 sm:space-x-6 sm:flex sm:flex-row sm:items-center'>
                      <button className='px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex items-center text-black bg-blue-300 space-x-2'>
                          <p >Download CV</p>
                          <FiDownload className="h-[1.7rem] w-[1.6rem] text-black" />
                      </button>
                      <button className='px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex items-center text-black bg-blue-300 space-x-2 w-[230px] justify-center'>
                          <FaGithub className="h-[1.7rem] w-[1.6rem] text-black" />
                          <p >Github</p>
                      </button>
                  </div>
              </div>
              <div className='mx-auto lg:h-[500px] lg:w-[500px] md:h-[400px] md:w-[400px] lg:mx-0 mt-[2rem] lg:mt-0 w-[300px] h-[300px] relative'>
                  <Image
                      src="/images/about.jpg"
                      alt="users"
                      layout="fill"
                      className="relative w-[100%] z-[100] h-[100%] object-contain"
                  />
                  <div className='absolute w-[100%] h-[100%] z-[10] top-[-1.5rem] right-[-1.5rem] bg-gradient-to-r  from-blue-400 via-purple-300 to-[#55e6a5] shadow-xl'></div>
                  <div className='absolute w-[100%] h-[100%] z-[5] top-[-3rem] right-[-3rem] bg-gradient-to-r  to-blue-400 via-purple-300 from-[#55e6a5] shadow-xl'></div>
                  {/* <div className='absolute w-[100%] h-[100%] rounded-full shadow-lg z-[10] top-[-1px] bg-blue-400 left-[-1px]'></div> */}
              </div>
          </div>
    </div>
  )
}

export default About