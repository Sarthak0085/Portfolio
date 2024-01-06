import About from '@/components/About/About';
import Hero from '@/components/Home/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills&Education/Skills&Education';
// import Blogs from '@/components/Blog/Blogs';
import Contact from '@/components/Contact/Contact';
import Heading from '@/utils/heading';

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Heading 
        title='Portfolio'
        description='This page shows the Portfolio Home page'
        keywords='Nextjs, particles, react, '
      />
      <div>
        <Hero />
      </div>
      <div className='relative z-[3]'>
        <About />
        <Skills />
        <Projects />
        {/* <Blogs/> */}
        <Contact/>
      </div>
    </div>
  )
}
