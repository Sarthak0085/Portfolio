import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { MdArrowOutward, MdForward } from 'react-icons/md';

interface ProjectProps {
    title: string;
    src: string;
    description: string;
    LiveLink?: string;
    githubLink?: string;
    githubbackendLink?: string
    delay?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, src, description, delay, githubLink, LiveLink, githubbackendLink }) => {
    return (
        <Link
            data-aos="fadeUpIn"
            data-aos-delay={delay}
            href={`/project/${title}?image=${src}&description=${description}&${githubLink ? `github=${githubLink}` : ''}&${githubbackendLink ? `backend=${githubbackendLink}` : ''}&${LiveLink ? `live=${LiveLink}` : ''}`}
            className='border cursor-pointer border-slate-500  hover:scale-110 transition-all duration-200'
        >
            <div className='relative
                  h-[200px] md:h-[300px]'>
                <Image
                    src={src}
                    alt="portfolio"
                    layout='fill'
                    className="object-contain"
                />

            </div>
            <h2 className='bg-gradient-to-r bg-clip-text text-transparent pt-2 text-center from-blue-500 to-[#55e6a5] font-bold text-[22px]'>
                {title}
            </h2>
                <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-[10px] my-[20px]'>
                        {
                            githubLink ? githubbackendLink ?
                            <Link href={`${githubLink}`} className='flex gap-2 items-center justify-center border p-2 rounded-md border-blue-500 text-[#55e6a5] '>
                               Frontend <FaGithub />
                        </Link>
                        : <Link href={`${githubLink}`} className='flex gap-2  items-center justify-center border p-2 rounded-md border-blue-500 text-[#55e6a5] '>
                               Github <FaGithub />
                        </Link>
                        : <p className='flex items-center col-span-12 justify-center text-[#f0b666] '> Currently Working....</p>
                }
                {
                            githubbackendLink &&
                            <Link href={`${githubLink}`} className='flex gap-2 items-center justify-center border p-2 rounded-md border-blue-500 text-[#55e6a5] '>
                               Backend <FaGithub />
                        </Link>
                        }
                        {
                            LiveLink &&
                            <Link href={`${LiveLink}`} className='flex gap-2 items-center justify-center border p-2 rounded-md border-blue-500 text-[#55e6a5] '>
                              Go live <MdArrowOutward />
                            </Link>
                        }
            </div>
        </Link>
    )
}

export default ProjectCard