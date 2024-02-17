import React from 'react'

interface Props{
    title: string;
    year: string;
    cgpa?: number;
    percentage?: number;
    description: string;
    delay?: string;
}

const Education:React.FC<Props> = ({title, year, cgpa, percentage, description, delay}) => {
    return (
      <div data-aos="fadeInUp" data-aos-delay={delay} >
            <div className='border-[2px] p-[2rem] mb-[2rem]'>

          <span className='px-[2rem] text-[#55e6a5] py-[1rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
              {year}
          </span>
          <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
              {title}
          </h1>
          <h2 className='mt-[1rem] text-orange-400 text-[18px] font-bold'>
              {percentage ? percentage : cgpa }{percentage ? <span>%</span> : <span className='pl-2'>cgpa</span>}
          </h2>
          <p className='mt-[1rem] text-[#aaaaaa] text-[17px] font-normal w-[80%] opacity-80'>
              {description}
          </p>
      </div>
      </div>
      
  )
}

export default Education;