import Heading from '@/utils/heading'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[4rem]'>
          <h1 className='heading'>
              Pro<span className='text-orange-400'>ject</span>
          </h1>
          <div className='w-[90%] 500:w-[70%] md:w-[90%] pt-[2rem] mx-auto grid grid-cols-1 sm:w-[60%] md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <ProjectCard
          delay="300"
          title='Portfolio'
          src='/images/projects/myportfolio.png'
          githubLink='https://github.com/Sarthak0085/Portfolio'
          LiveLink='https://portfolio-black-one-68.vercel.app/'
          description="Portfolio project is made using Next.js, Tailwind CSS, and AOT animation libraries for a dynamic and visually
                         appealing portfolio website and also it is fully responsive.
          This project showcases all my skills, education, projects and some other details about me."
        />
        <ProjectCard
          delay="300"
          title='CineCraze'
          src='/images/projects/cinecraze.png'
          githubLink='https://github.com/Sarthak0085/Movie-frontend'
          githubbackendLink='https://github.com/Sarthak0085/Movie-server'
          LiveLink='https://movie-frontend-six-rho.vercel.app/'
          description="This is a fully responsive full-stack movie-streaming website using MERN stack along with tailwindcss for
              styling and redux for state management.
              Enabled users to browse, search, and watch movies, as well as leave reviews and realtime chat, while
              providing admins with CRUD functionalities for managing categories, movies, and users.
              Enhanced user experience by implementing sorting options for movies by category, year, language, rating,
              and duration, promoting efficient navigation and content discovery."
        />
        <ProjectCard
          delay="300"
          title='MERN-Bot'
          src='/images/projects/mern-bot.png'
          githubLink='https://github.com/Sarthak0085/mern-bot-client'
          githubbackendLink = 'https://github.com/Sarthak0085/Mern-Bot'
          LiveLink='https://mern-bot-client.vercel.app/'
          description="Employed TypeScript to enhance codebase robustness and maintainability, ensuring type safety and
             improved developer productivity across the MERN stack application.
             Integrated OpenAI's GPT-3.5 Turbo API seamlessly into the backend infrastructure, enabling users to
             engage in meaningful conversations with AI while leveraging TypeScript's static typing for enhanced
             development efficiency.
             Combined TypeScript with React, Node.js, and Express to create a scalable and reliable application
             architecture, facilitating smoother development workflows and reducing potential runtime errors."
        />
        <ProjectCard
          delay="300"
          title='ShopCraze'
          src='/images/projects/shopcraze.png'
          description="Utilized RTK Query for seamless data fetching and management, enhancing user experience by ensuring
              efficient and responsive interactions.
              Implemented multivendor functionality to enable multiple sellers to list and manage their products,
              expanding the platform's offerings and revenue streams.
              Incorporated CRUD operations to empower administrators with the ability to efficiently manage products,
              vendors, and customer data, ensuring smooth platform operations and user satisfaction."
          />
          </div>
    </div>
  )
}

export default Projects