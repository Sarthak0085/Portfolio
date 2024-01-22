import React from 'react';

interface Props{
    skill: string;
  level?: string;
  delay?: string;
}

const SkillsItem:React.FC<Props> = ({skill, level, delay}) => {
  return (
      <div  data-aos="fadeUpIn" data-aos-delay={delay} className='relative mb-[3rem]'>
          <div className={`w-[100%] uppercase font-bold text-[20px] border-[2px] border-[#55e6a5] opacity-80 rounded-md text-white`}>
              {level ?
                  <h1 className={`${level} hover:bg-[#55e6a5] p-5`}>{skill}</h1> :
                  <h1 className='p-5'>{skill}</h1>}
          </div>
    </div>
  )
}

export default SkillsItem