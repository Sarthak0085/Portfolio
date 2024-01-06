import React from 'react'
import Education from './Education'
import SkillsItem from './SkillsItem'

const Skills = () => {
  return (
      <div className='pt-[4rem] md:pt-[6rem] pb-[5rem] bg-[#09101a]'>
          <h1 className='heading'>
              Education & <span className='text-orange-400'>Skills</span>
          </h1>
          <div className='flex flex-col pt-[4rem] md:pt-[6rem] gap-5'>
              <h2 className='text-blue-500 md:text-[3rem] text-[2rem] text-center'>Education</h2>
              <div className='w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <Education title='Matriculation' year='2015-2017' description='I passed my matriculation from Vivekanand High School, Pathankot' percentage={90}/>
                <Education title='Matriculation' year='2017-2019' description='I passed my 12th from Government Senior Secondary High School, Pathankot' percentage={89.5}/>
                <Education title='B.tech' year='2019-2023' description='I passed my 12th from Government Senior Secondary High School, Jalandhar' cgpa={7.71}/>
              </div>
      </div>
      <div className='border-b border-[#55e6a5] mt-[2rem] w-[80%] mx-auto'></div>
          <div className='flex flex-col pt-[3rem] md:pt-[4rem] gap-5'>
              <h2 className='text-blue-500 md:text-[3rem] text-[2rem] text-center'>Skills</h2>
              <div className='w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                  <SkillsItem skill='HTML' level='w-[81%]'/>
                  <SkillsItem skill='CSS' level='w-[70%]'/>
                  <SkillsItem skill='Javascript' />
                  <SkillsItem skill='React' />
                  <SkillsItem skill='NODE JS' />
                  <SkillsItem skill='Express Js' />
                  <SkillsItem skill='MONGODB' />
                  <SkillsItem skill='Next js' />
              </div>
          </div>
    </div>
  )
}

export default Skills