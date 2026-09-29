import React from 'react'
import ProjectCard from './ProjectCard'
import portfolioImage from '../assets/portfolioImage.png'
import ytImage from '../assets/yt-project.png'
import nikeImage from '../assets/nikeProject.png'

const projects = [
  {
    thumbnail: ytImage,
    title: 'YouTube Clone',
    url: 'https://yt-clone-sumit.netlify.app/',
    github: 'https://github.com/Sumit-exe',
    stack: 'React.js | TypeScript | Tailwind | Redux | ReduxToolKit',
    description:
      'A browser-view YouTube clone with Home, Search, and Watch pages. Built with React, TypeScript, TailwindCSS and YouTube Data API — an exact replica of YouTube\'s modern UI.',
  },
  {
    thumbnail: nikeImage,
    title: 'Nike Ecommerce Store',
    url: 'https://nike-store-sumit.netlify.app/',
    github: 'https://github.com/Sumit-exe',
    stack: 'React.js | Tailwind | Vite | JavaScript',
    description:
      'A stunning Nike E-commerce Store UI built with React and TailwindCSS. Features a modern, production-ready design following the latest industry trends.',
  },
  {
    thumbnail: portfolioImage,
    title: 'Personal Portfolio Website',
    url: 'https://portfolio-sumitsharma.netlify.app/',
    github: 'https://github.com/Sumit-exe',
    stack: 'HTML | CSS | JavaScript',
    description:
      'A modern and animated portfolio website showcasing frontend skills, designed and developed with pure HTML, CSS, and Vanilla JavaScript animations.',
  },
];

function Projects() {
  return (
    <section id="project" className="flex flex-col items-center gap-10">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          My <span className="text-main">Projects</span>
        </h1>
        <div className="w-16 h-1 bg-main mx-auto mt-3 rounded-full" />
        <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto">
          A selection of things I've built — from full-stack apps to polished UI experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-8 w-full max-lg:grid-cols-1 max-xl:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
