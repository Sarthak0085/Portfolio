import Image from 'next/image'
import React from 'react';

interface Props {
    image: string;
}

const BlogCard = ({ image }: Props) => {
    return (
        <div className='cursor-pointer hover:-translate-y-6 border-[1px] border-slate-800 p-2 transition-all duration-200 relative'>
            <div className='w-[100%] relative h-[400px]'>
                <Image
                    src={image}
                    alt="blog"
                    layout='fill'
                    className="object-cover"
                />
            </div>
            <div className='w-full mx-auto pt-[1rem] relative'>
                <div className='py-[1rem] px-[1rem] relative font-semibold text-[#55e6a5]'>
                    20 December, 2023
                </div>
                <h1 className='text-white text-center font-semibold text-[18px] mt-[1rem]'>NEXTJS Project</h1>
            </div>
        </div>
    )
}

export default BlogCard