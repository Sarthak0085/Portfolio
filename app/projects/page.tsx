import Projects from '@/components/Projects/Projects';
import Heading from '@/utils/heading';
import React from 'react'

const page = () => {
  return (
      <div className='overflow-x-hidden'>
          <Heading 
        title='Projects'
        description="This page shows the Person's Projects"
        keywords='Nextjs, particles, react, Contact , Web Development, Programming'
      />
       <div className='h-full mt-[3.5rem] overflow-y-hidden'>
        <Projects />
      </div>
    </div>
  )
}

export default page