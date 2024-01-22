import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectProps {
    title: string;
    src: string;
    description: string;
    LiveLink?: string;
    githubLink?: string;
    delay?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, src, description, delay }) => {
    return (
        <Link data-aos="fadeUpIn" data-aos-delay={delay} href={`/project/${title}?image=${src}&description=${description}`} className='border cursor-pointer border-slate-500  hover:scale-110 transition-all duration-200'>
            <div className='relative w-[100%]
                  h-[200px] md:h-[300px]'>
                <Image
                    src={src}
                    alt="portfolio"
                    layout='fill'
                    className="object-contain"
                />

            </div>
            <h2 className='bg-gradient-to-r bg-clip-text text-transparent text-center from-blue-500 to-[#55e6a5] font-bold text-[22px]'>
                {title}
            </h2>
        </Link>
    )
}

export default ProjectCard