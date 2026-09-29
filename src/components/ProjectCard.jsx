import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ thumbnail, title, url, github, stack, description, tags }) {
  const stackList = stack.split('|').map(s => s.trim()).filter(Boolean);

  return (
    <div className='group relative bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col'>
      {/* Thumbnail */}
      <div className='relative overflow-hidden h-48 bg-gray-50'>
        <img
          src={thumbnail}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
        {/* overlay gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-3 p-6 flex-1'>
        <h2 className='text-xl font-bold text-gray-800 group-hover:text-main transition-colors duration-200'>
          {title}
        </h2>

        {/* Stack tags */}
        <div className='flex flex-wrap gap-1.5'>
          {stackList.map((tech) => (
            <span
              key={tech}
              className='text-xs font-medium bg-main/10 text-main border border-main/20 px-2 py-0.5 rounded-full'
            >
              {tech}
            </span>
          ))}
        </div>

        <p className='text-sm text-gray-500 line-clamp-3 flex-1 leading-relaxed'>
          {description}
        </p>

        {/* Actions */}
        <div className='flex items-center gap-3 mt-2'>
          <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 text-sm font-semibold text-white bg-main px-4 py-2 rounded-full hover:bg-main/90 shadow hover:shadow-main transition-all duration-200'
          >
            <FaExternalLinkAlt className='text-xs' /> Live Preview
          </a>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 px-4 py-2 rounded-full hover:border-main hover:text-main transition-all duration-200'
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
