import html_logo from '../assets/skills-icons/html-icon.svg'
import kafka_logo from '../assets/skills-icons/apache_kafka-icon.svg'
import mongodb_logo from '../assets/skills-icons/mongodb-icon.svg'
import mysql_logo from '../assets/skills-icons/mysql-icon.svg'
import spring_logo from '../assets/skills-icons/springio-icon.svg'
import nodejs_logo from '../assets/skills-icons/nodejs-icon.svg'
import java_logo from '../assets/skills-icons/java-icon.svg'
import css_logo from '../assets/skills-icons/css-icon.svg'
import js_logo from '../assets/skills/js.png'
import react_logo from '../assets/skills/react.png'
import docker_logo from '../assets/skills/docker.png'
import tailwind_logo from '../assets/skills/tailwind.png'
import aws_logo from '../assets/skills/aws.png'
function Skills() {

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
            title:'TAILWIND',
            color: 'shadow-blue-400',
            img: tailwind_logo
        },
        {
            title:'JAVASCRIPT',
            color: 'shadow-yellow-400',
            img: js_logo
        },
        {
            title:'NODE.js',
            color: 'shadow-green-400',
            img: nodejs_logo
        },
        {
            title:'REACT',
            color: 'shadow-blue-400',
            img: react_logo
        },
        
        
        {
            title:'MYSQL',
            color: 'shadow-orange-400',
            img: mysql_logo
        },
        {
            title:'MongoDB',
            color: 'shadow-green-400',
            img: mongodb_logo
        },
        
        
        {
            title:'JAVA',
            color: 'shadow-blue-400',
            img: java_logo
        },
        {
            title:'SPRINGBOOT',
            color: 'shadow-green-400',
            img: spring_logo
        },
        
        {
            title:'DOCKER',
            color: 'shadow-blue-400',
            img: docker_logo
        },
        {
            title:'KAFKA',
            color: 'shadow-gray-400',
            img: kafka_logo
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
        <div className='grid grid-cols-6 max-lg:grid-cols-4 gap-10 my-10 max-md:grid-cols-3 max-sm:grid-cols-2'>
            {
                skills.map((skill , index) => (
                    <div key={index} className={`flex flex-col items-center border justify-between shadow-lg ${skill.color} rounded-lg`} >
                        <div className='w-28 p-5 flex justify-center items-center flex-1 max-sm:w-24'>
                            <img src={skill.img}  />
                        </div>
                        <h3 className='text-lg pb-3'>{skill.title}</h3>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Skills