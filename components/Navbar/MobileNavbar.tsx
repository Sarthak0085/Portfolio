import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoMdClose } from "react-icons/io";

interface Props{
    nav: boolean;
    closeNav: () => void;
}

const MobileNavbar: React.FC<Props> = ({ nav, closeNav }) => {

    const pathname = usePathname();
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"

    return (
        <div className={`fixed transform ${navAnimation} transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
          <div className='flex flex-col items-center justify-center h-[100vh] w-[100vw]'>
                <Link
                    href={"/"}
                    onClick={closeNav}
                    className={`nav-link-mobile ${pathname === "/" ? "active-mobile" : ""}`}
                >
                    Home
                </Link>
                <Link
                    href={"/about"}
                    onClick={closeNav}
                    className={`nav-link-mobile ${pathname === "/about" ? "active-mobile" : ""}`}
                >
                    About
                </Link>
                <Link
                    href={"/skills&education"}
                    onClick={closeNav}
                    className={`nav-link-mobile ${pathname === "/skills&education" ? "active-mobile" : ""}`}
                >
                    Skills
                </Link>
                <Link
                    href={"/projects"}
                    onClick={closeNav}
                    className={`nav-link-mobile ${pathname === "/projects" ? "active-mobile" : ""}`}
                >
                    Projects
                </Link>
                <Link
                    href={"/contact"}
                    onClick={closeNav}
                    className={`nav-link-mobile ${pathname === "/contact" ? "active-mobile" : ""}`}
                >
                    Contact
                </Link>
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