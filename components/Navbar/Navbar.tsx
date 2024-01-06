import Link from 'next/link';
import React from 'react';
import { FaBars } from "react-icons/fa";

interface Props{
    openNav: () => void;
}

const Navbar:React.FC<Props> = ({openNav}) => {
  return (
      <nav className='w-[100%] fixed z-[1000] h-[12vh] top-0 shadow-md bg-[#141c27]'>
          <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
              <Link href={"/"} className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                  Sarthak <span className='text-orange-500'>.</span>
              </Link>
              <Link href={"/"} className='nav-link'>Home</Link>
              <Link href={"/about"} className='nav-link'>About</Link>
              <Link href={"/skills&education"} className='nav-link'>Skills</Link>
              <Link href={"/projects"} className='nav-link'>Projects</Link>
              <Link href={"/contact"} className='nav-link'>Contact</Link>
              <div onClick={openNav}>
                <FaBars className="w-[2rem] h-[2rem] cursor-pointer text-orange-400 md:hidden" />
              </div>
          </div>
      </nav>
  )
}

export default Navbar