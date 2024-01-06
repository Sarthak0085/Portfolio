"use client";
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web-Developer',
        2000, 
        'Programmer',
        2000,
        'Coder',
        2000,
      ]}
      wrapper="span"
      speed={50}
      className='font-bold text-[2rem] md:text-[3rem] uppercase text-[#55e6a5]'
      repeat={Infinity}
    />
  );
};

export default TextAnimation;