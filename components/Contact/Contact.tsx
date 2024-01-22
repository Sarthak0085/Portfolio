import React from 'react'
import LottieAnimation from './LottieAnimation'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='bg-[#09101a] pt-[4rem] md:pt-[6rem] pb-[3rem]'>
      <h1 className='heading'>Contact <span className='text-orange-400'>Me</span></h1>
      <div className='w-[100%] pt-[2rem] flex flex-col md:flex-row items-center justify-center '>
        <div data-aos="fade-right" data-aos-delay="300" className='inline-block w-full md:w-2/4 h-full'>
          <LottieAnimation />
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className='w-full md:w-2/4 border-t-2 mt-[2rem] md:mt-0 pt-[2rem] md:pt-0 md:border-t-0 md:border-l-2 border-slate-800 px-[20px] border-solid flex flex-col items-center md:items-start justify-center pb-8'>
          <div className='font-bold capitalize text-4xl text-[#55e6a5]'>Let&apos;s Connect</div>
            <ContactForm />

           
          <div className='text-[25px] font-medium text-white' >Email Me here : <a href='mailto:sarth.mahajan2000@gmail.com' className='text-[#55e6a5] !text-[20px]'>sarth.mahajan2000@gmail.com</a></div>
        </div>
      </div>
    </div>
  )
}

export default Contact