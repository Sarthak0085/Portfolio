import React from 'react'
import Education from './Education'
import SkillsItem from './SkillsItem'
import Heading from '@/utils/heading'

const Skills = () => {
  return (
    <div id='skills' className='pt-[4rem] md:pt-[6rem] pb-[5rem] bg-[#09101a]'>
          <h1 className='heading'>
              Education & <span className='text-orange-400'>Skills</span>
          </h1>
          <div className='flex flex-col pt-[4rem] md:pt-[6rem] gap-5'>
              <h2 className='text-blue-500 md:text-[3rem] text-[2rem] text-center'>Education</h2>
              <div className='w-[80%] mx-auto pt-[2rem] grid grid-cols-1 800:grid-cols-2 gap-[2rem] items-center'>
                <Education delay="450" title='B.tech' year='2019-2023' description='I passed my B.Tech in Textile Technology from Dr. BR Ambedkar National Institute of Technology, Jalandhar' cgpa={7.71}/>
                <Education delay="300" title='Intermediate' year='2017-2019' description='I passed my 12th in Science Stream from Government Senior Secondary High School (Boys), Pathankot' percentage={89.5}/>
                <Education delay="150" title='Matriculation' year='2015-2017' description='I passed my matriculation from Vivekanand High School, Pathankot' percentage={90}/>
              </div>
      </div>
      <div className='border-b border-[#55e6a5] mt-[2rem] w-[80%] mx-auto'></div>
          <div className='flex flex-col pt-[3rem] md:pt-[4rem] gap-5'>
              <h2 className='text-blue-500 md:text-[3rem] text-[2rem] text-center'>Skills</h2>
              <div className='w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                  <SkillsItem delay='100' skill='HTML' level='w-[81%]'/>
                  <SkillsItem delay='200' skill='CSS' level='w-[70%]'/>
                  <SkillsItem delay='300' skill='Javascript' />
                  <SkillsItem delay='400' skill='React' />
                  <SkillsItem delay='500' skill='NODE JS' />
                  <SkillsItem delay='600' skill='Express Js' />
                  <SkillsItem delay='700' skill='MONGODB' />
                  <SkillsItem delay='800' skill='Next js' />
                  <SkillsItem delay='900' skill='Typescript' />
              </div>
          </div>
    </div>
  )
}

export default Skills