import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[3rem] '>
          <h1 className='heading'>
              MY<span className='text-orange-400'>Blogs</span>
          </h1>
          <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[3rem]'>
              {/* <div> */}
              <BlogCard image={'/images/blog1.jpg'} />
              <BlogCard image={'/images/blog2.jpg'} />
              
          </div>
    </div>
  )
}

export default Blogs