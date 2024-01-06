import Link from 'next/link';
import React from 'react';
import { IoMdClose } from "react-icons/io";

interface Props{
    nav: boolean;
    closeNav: () => void;
}

const MobileNavbar: React.FC<Props> = ({ nav, closeNav }) => {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"

    return (
        <div className={`fixed transform ${navAnimation} transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
          <div className='flex flex-col items-center justify-center h-[100vh] w-[100vw]'>
              <Link href={"/"} className='nav-link-mobile'>Home</Link>
              <Link href={"/about"} className='nav-link-mobile'>About</Link>
              <Link href={"/skills&education"} className='nav-link-mobile'>Skills</Link>
              <Link href={"/projects"} className='nav-link-mobile'>Projects</Link>
              <Link href={"/contact"} className='nav-link-mobile'>Contact</Link>
          </div>
          <div onClick={closeNav}
              className='absolute cursor-pointer top-[2rem] right-[2rem] text-orange-400'
          >
              <IoMdClose className="h-[2rem] w-[2rem]" />
          </div>
    </div>
  )
}

export default MobileNavbar