"use client";
import Contact from '@/components/Contact/Contact';
import Heading from '@/utils/heading';
import React, { useState } from 'react'

const page = () => {
  return (
      <div className='overflow-x-hidden'>
          <Heading 
        title='Contact'
        description="This page shows the Person's Contact details"
        keywords='Nextjs, particles, react, Contact , Web Development, Programming'
      />
       <div className='h-full mt-[3.5rem] overflow-y-hidden'>
        <Contact />
      </div>
    </div>
  )
}

export default page