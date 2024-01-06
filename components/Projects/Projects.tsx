import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
      <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[4rem]'>
          <h1 className='heading'>
              Pro<span className='text-orange-400'>ject</span>
          </h1>
          <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
              <ProjectCard title='Portfolio' src='/images/p1.jpg' description="This project is made on the nextjs framework and ts-particles and emailjs for getting contact form response"/>
          </div>
    </div>
  )
}

export default Projects