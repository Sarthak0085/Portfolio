"use client";
import ProjectDetails from '@/components/ProjectDetails/ProjectDetails';
import Heading from '@/utils/heading';
import { useSearchParams } from 'next/navigation';
import React from 'react'

type Props = {
    params: any;
}


const page: React.FC<Props> = ({ params }) => {
    const title = params.title;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const searchParams = useSearchParams();
    const image = searchParams.get("image");
    const description = searchParams.get("description");
    console.log(image);
    
    console.log(title);
    
    return (
      <div className='overflow-x-hidden'>
      <Heading 
        title={`${title} Project`}
        description={`This page shows the details of the project: ${title}`} 
        keywords='Nextjs, particles, react, '
            />
      <div className='h-full mt-[3.5rem] overflow-y-hidden'>
          <ProjectDetails title={title} image={image} description={description} />
      </div>
    </div>
  )
}

export default page