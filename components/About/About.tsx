import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

const About = () => {
  return (
      <div className='bg-[#121121] pt-[4rem] pb-[4rem] md:pt-[4rem]'>
           <h1 className='heading pb-[4rem]'>About <span className='text-orange-400'>Me</span></h1>
          <div data-aos="fade-right" data-aos-delay="300" className='grid grid-cols-1 1150:grid-cols-2 w-[80%] mx-auto gap-[3rem] lg:justify-start justify-center items-center'>
              <div className='flex items-center mx-auto 1150:mx-0 justify-center 1150:justify-start flex-col'>
                  <h2 className='text-[25px] md:text-[35px] 1150:text-[45px] leading-[2rem] md:leading-[3rem] capitalize 
                  mb-[3rem] font-bold text-white'>
                      Transforming <span className='text-orange-400'>Vision</span>
                  </h2>
                  <div className='mb-[3rem] flex justify-center 1150:justify-start items-center md:space-x-10'>
                  <span className='w-[100px] hidden md:block bg-gray-400 h-[5px] rounded-md'></span>
                  <p className='text-[20px] text-slate-300 w-[80%]'>
                        I&apos;m a self-taught coder with a background in textiles, now deeply passionate about coding.
                        From textiles to coding, I&apos;ve embraced learning new skills with enthusiasm.
                        I love the challenge of coding and enjoy creating solutions that make a difference. Now, I want to apply
                        my learning skills into the real world and dive deeper into technology, seeking to make meaningful
                        contributions and continually expand my knowledge.
                  </p>
                  </div>
                  <div className='space-y-6 mt-[2rem] flex-col sm:space-y-0 sm:space-x-6 sm:flex sm:flex-row sm:items-center'>
                      <a href='images/Sarthak_Resume.pdf'
                          download="Sarthak_Resume.pdf"
                          target='_blank'
                          className='px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex  text-black bg-blue-200 space-x-2'>
                           Download CV
                          <FiDownload className="h-[1.7rem] w-[1.6rem] text-black" />
                      </a>
                      <a href={'https://github.com/Sarthak0085/'} target='_blank' className='px-[2rem] gap-2 hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex text-black bg-blue-200 w-[230px] justify-center'>
                              <FaGithub className="h-[1.5rem] w-[1.6rem] text-black" />
                              Github
                          </a>
                  </div>
              </div>
              <div data-aos="fade-left" data-aos-delay="300" className='mx-auto 1150:h-[500px] 1150:w-[500px] md:h-[400px] md:w-[400px] 1150:mx-0 mt-[2rem] 1150:mt-0 w-[300px] h-[300px] relative'>
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