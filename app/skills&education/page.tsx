import Skills from '@/components/Skills&Education/Skills&Education';
import Heading from '@/utils/heading';

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <Heading 
        title='Education&Skills'
        description="This page shows the details of the Person Education and Skills"
        keywords='Nextjs, particles, react, Contact , Web Development, Programming'
      />
       <div className='h-full mt-[3.5rem] overflow-y-hidden'>
        <Skills />
      </div>
    </div>
  )
}

export default page