import Image from 'next/image';
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

interface ProjectDetailsProps{
    image: string | null;
    title: string;
    description: string | null;
    liveLink?: string | null;
    githubLink?: string | null;
}

const ProjectDetails:React.FC<ProjectDetailsProps> = ({title, image, description, liveLink, githubLink}) => {
  return (
    <div className='bg-[#121121] pt-[4rem] pb-[4rem] md:pt-[6rem]'>
           <h1 className='heading !capitalize pb-[4rem] md:pb-[2rem]'>Project<span className='text-orange-400 pl-2'>{title}</span></h1>
              <div className='grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-[3rem] justify-center items-center'>
                  <div className=' w-full lg:border-r-2  border-[#55e6a5] flex items-center justify-center lg:justify-start'>
                      <div className='lg:h-[500px] lg:w-[95%] md:pr-[1rem] md:w-[80%] mt-[2rem] lg:mt-0 w-[90%] h-auto relative'>
                  <Image
                      src={image !== null ? image : "/profile.jpg"}
                              alt="project"
                              width={400}
                              height={400}
                      className="relative w-[100%] h-[100%] object-contain"
                      />
                      </div>
                  </div>
              <div className='flex items-center mx-auto lg:pl-[1rem] lg:mx-0 justify-center lg:justify-start flex-col'>
                  <div className='mb-[3rem] flex justify-center lg:justify-start items-center md:space-x-10'>
                  <p className='text-[20px] text-slate-300 w-[90%]'>
                      {description !==null && description}
                  </p>
                  </div>
                  <div className='space-y-6 mt-[2rem] flex-col sm:space-y-0 justify-center sm:space-x-6 sm:flex sm:flex-row sm:items-center'>
                      <button className='px-[2rem] hover:text-orange-400 w-[200px] border border-orange-300 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex items-center justify-center text-white space-x-2'>
                          <p >Live</p>
                          <MdArrowOutward className="h-[1.7rem] w-[1.6rem]"/>
                      </button>
                      <button className='px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex items-center text-black bg-blue-300 space-x-2 w-[200px] justify-center'>
                          <FaGithub className="h-[1.7rem] w-[1.6rem] text-black" />
                          <p >Github</p>
                      </button>
                  </div>
                  </div>
                  
              </div>
          </div>
  )
}

export default ProjectDetails