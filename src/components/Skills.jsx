import React from 'react'
import html_logo from '../assets/skills/html.png'
import css_logo from '../assets/skills/css.png'
import js_logo from '../assets/skills/js.png'
import react_logo from '../assets/skills/react.png'
import docker_logo from '../assets/skills/docker.png'
import github_logo from '../assets/skills/github.png'
import tailwind_logo from '../assets/skills/tailwind.png'
import aws_logo from '../assets/skills/aws.png'
function Skills() {
    const colors =['orange-400','gray-400' ,'yellow-400']
    const skills =[
        {
            title:'HTML',
            color: 'shadow-orange-400',
            img: html_logo
        },
        {
            title:'CSS',
            color: 'shadow-blue-400',
            img: css_logo
        },
        {
            title:'JAVASCRIPT',
            color: 'shadow-yellow-400',
            img: js_logo
        },
        {
            title:'REACT',
            color: 'shadow-blue-400',
            img: react_logo
        },
        {
            title:'TAILWIND',
            color: 'shadow-blue-400',
            img: tailwind_logo
        },
        {
            title:'GITHUB',
            color: 'shadow-gray-400',
            img: github_logo
        },
        {
            title:'DOCKER',
            color: 'shadow-blue-400',
            img: docker_logo
        },
        {
            title:'AWS',
            color: 'shadow-orange-400',
            img: aws_logo
        },
    ]

  return (
    <section id='skills'>

        <h1 className='text-center my-16'>My < span className='text-main'>Skills</span></h1>
        <p className='text-center text-lg '>These are the technologies I have worked with</p>
        <div className='grid grid-cols-4 gap-10 my-10 max-md:grid-cols-3 max-sm:grid-cols-2'>
            {
                skills.map((skill , index) => (
                    <div key={index} className={`flex flex-col items-center border justify-between shadow-lg ${skill.color} rounded-lg`} >
                        <div className='w-32 p-5 flex justify-center items-center flex-1'>
                            <img src={skill.img}  />
                        </div>
                        <h3 className='text-lg'>{skill.title}</h3>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Skills