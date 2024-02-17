'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";

interface Props{
    openNav: () => void;
}

const Navbar: React.FC<Props> = ({ openNav }) => {
    const pathname = usePathname();

    // const [activeSection, setActiveSection] = useState('home');
    // // const router = useRouter();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const home = document.getElementById('home');
    //         const aboutSection = document.getElementById('about');
    //         const skillsSection = document.getElementById('skills');
    //         const projectsSection = document.getElementById('projects');
    //         const contactSection = document.getElementById('contact');

    //         const scrollPosition = window.scrollY;

    //         if (
    //             aboutSection && scrollPosition >= aboutSection.offsetTop && 
    //             skillsSection && scrollPosition < skillsSection.offsetTop
    //         ) {
    //             setActiveSection('about');
    //         } else if (
    //             skillsSection && scrollPosition >= skillsSection.offsetTop && 
    //             projectsSection && scrollPosition < projectsSection.offsetTop
    //         ) {
    //             setActiveSection('skills');
    //         } else if (
    //             projectsSection && scrollPosition >= projectsSection.offsetTop && 
    //             contactSection && scrollPosition < contactSection.offsetTop
    //         ) {
    //             setActiveSection('projects');
    //             // router.push("/projects")
    //         } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
    //             setActiveSection('contact');
    //             // router.push("/contact")
    //         } else {
    //             setActiveSection('home');
    //             // router.push("/")
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

  return (
      <nav className='w-[100%] fixed z-[1000] h-[12vh] top-0 shadow-md bg-[#141c27]'>
          <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
              <Link href={"/"} className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                  Sarthak <span className='text-orange-500'>.</span>
              </Link>
              <Link href={"/"} className={`nav-link ${pathname === "/" ? "active": ""}`}>Home</Link>
              <Link href={"/about"} className={`nav-link ${pathname === "/about" ? "active": ""}`}>About</Link>
              <Link href={"/skills&education"} className={`nav-link ${pathname === "/skills&education" ? "active": ""}`}>Skills</Link>
              <Link href={"/projects"} className={`nav-link ${pathname === "/projects" ? "active": ""}`}>Projects</Link>
              <Link href={"/contact"} className={`nav-link ${pathname === "/contact" ? "active": ""}`}>Contact</Link>
              <div onClick={openNav}>
                <FaBars className="w-[2rem] h-[2rem] cursor-pointer text-orange-400 md:hidden" />
              </div>
          </div>
      </nav>
  )
}

export default Navbar

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaBars } from 'react-icons/fa';
// import { usePathname, useRouter } from 'next/navigation';

// const Navbar = ({ openNav }) => {
//     const [activeSection, setActiveSection] = useState('home');
//     const router = useRouter();

//     useEffect(() => {
//         const handleScroll = () => {
//             const aboutSection = document.getElementById('about');
//             const skillsSection = document.getElementById('skills');
//             const projectsSection = document.getElementById('projects');
//             const contactSection = document.getElementById('contact');

//             const scrollPosition = window.scrollY;

//             if (
//                 aboutSection && scrollPosition >= aboutSection.offsetTop && 
//                 skillsSection && scrollPosition < skillsSection.offsetTop
//             ) {
//                 setActiveSection('about');
//                 router.push("/about")
//             } else if (
//                 skillsSection && scrollPosition >= skillsSection.offsetTop && 
//                 projectsSection && scrollPosition < projectsSection.offsetTop
//             ) {
//                 setActiveSection('skills');
//                 router.push("/skills&education")
//             } else if (
//                 projectsSection && scrollPosition >= projectsSection.offsetTop && 
//                 contactSection && scrollPosition < contactSection.offsetTop
//             ) {
//                 setActiveSection('projects');
//                 router.push("/projects")
//             } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
//                 setActiveSection('contact');
//                 router.push("/contact")
//             } else {
//                 // setActiveSection('home');
//                 // router.push("/")
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <nav className='w-[100%] fixed z-[1000] h-[12vh] top-0 shadow-md bg-[#141c27]'>
//             <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
//                 <Link href={"/"} className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
//                     Sarthak <span className='text-orange-500'>.</span>
//                 </Link>
//                 <Link href={"/"} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</Link>
//                 <Link href={"/about"} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</Link>
//                 <Link href={"/skills&education"} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</Link>
//                 <Link href={"/projects"} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</Link>
//                 <Link href={"/contact"} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</Link>
//                 <div onClick={openNav}>
//                     <FaBars className="w-[2rem] h-[2rem] cursor-pointer text-orange-400 md:hidden" />
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

