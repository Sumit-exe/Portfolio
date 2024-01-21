import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
function ProjectCard({thumbnail,title,url , stack ,description}) {
  return (
    <div className='p-4 border cursor-pointer rounded-xl shadow-xl '>
        <div className=' w-full mb-5 flex items-center py-1 justify-center'>
          <img src={thumbnail} alt="project thumbnail" className='w-full h-full shadow-md shadow-gray-400' />
        </div>

        <div className='flex flex-col gap-3 cursor-text'>
            <h2 className='text-xl underline font-medium'>{title}</h2>
            <h4>Stack: {stack}</h4>
            <p className=' line-clamp-3'>{description}</p>
            <a href={url}target='_blank' className='flex items-center gap-2 p-3 border max-w-[100px] shadow-md rounded-md border-main text-main hover:shadow-main'><FaExternalLinkAlt />Preview</a>
        </div>
    </div>
  )
}

export default ProjectCard