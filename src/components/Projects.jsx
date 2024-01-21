import React from 'react'
import ProjectCard from './ProjectCard'
import portfolioImage from '../assets/portfolioImage.png'
import ytImage from '../assets/yt-project.png'
import nikeImage from '../assets/nikeProject.png'
import ProjectSlider from './ProjectSlider'

function Projects() {
  return (
    <section id="project"className=''>
        <h1 className='text-center my-10'>My <span className='text-main'>Projects</span></h1>

        <div className='grid grid-cols-3 gap-6 max-lg:grid-cols-1'>

        <ProjectCard thumbnail={ytImage} title={'YouTube Clone'} url={"https://yt-clone-sumit.netlify.app/" } stack={`React.js | Tailwind | Redux | TypeScript | ReduxToolKit`} description={'I have made a browser view youtube clone using react, typescript, tailwindcss and youtubeApi. It has 3 pages - home , Search and Watch page. it is a exact replica of youtube UI   '}/>

        <ProjectCard thumbnail={nikeImage} title={'Nike Ecommerce Store' } url={'https://nike-store-sumit.netlify.app/'} stack={`Html | CSS | Javascript | React.js | Tailwindcss  | Vite`} description={'I have Created a Stunning Nike Ecommerce Store UI . using React and Tailwindcss . It has mordern UI as per the New industry Trends ready to be showcased in production'}/>

        <ProjectCard thumbnail={portfolioImage} title={'Personal Portfolio Website'} url={'https://portfolio-sumitsharma.netlify.app/'} stack={`HTML | CSS | Javascript | Javascript animations`} description={'I have Design and Developed a Modern Stunning Portfolio with amazing animations that showcase my frontend Skills. I have made this using Html css and Vallina Javascript'}/>


        
        </div>

        {/* <div className='max-xl:hidden'>
          <ProjectSlider  />
        </div> */}
    </section>


  )
}

export default Projects