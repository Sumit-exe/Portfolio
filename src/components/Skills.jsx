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
import python_logo from '../assets/skills-icons/python-icon.svg'
import fastapi_logo from '../assets/skills-icons/fastapi-icon.svg'
import langchain_logo from '../assets/skills-icons/langchain-icon.svg'
import rag_logo from '../assets/skills-icons/rag-icon.svg'

const categories = [
  {
    label: 'AI & GenAI',
    accent: 'border-violet-400',
    labelColor: 'text-violet-600 bg-violet-50 border-violet-200',
    skills: [
      { title: 'Python',    img: python_logo,   highlight: true  },
      { title: 'FastAPI',   img: fastapi_logo,  highlight: true  },
      { title: 'LangChain', img: langchain_logo, highlight: true },
      { title: 'RAG / Vector DB', img: rag_logo, highlight: true },
    ],
  },
  {
    label: 'Backend',
    accent: 'border-green-400',
    labelColor: 'text-green-600 bg-green-50 border-green-200',
    skills: [
      { title: 'Java',       img: java_logo,   highlight: true  },
      { title: 'SpringBoot', img: spring_logo, highlight: true  },
      { title: 'Node.js',    img: nodejs_logo, highlight: false },
    ],
  },
  {
    label: 'Frontend',
    accent: 'border-blue-400',
    labelColor: 'text-blue-500 bg-blue-50 border-blue-200',
    skills: [
      { title: 'React',      img: react_logo,    highlight: true  },
      { title: 'JavaScript', img: js_logo,       highlight: true  },
      { title: 'Tailwind',   img: tailwind_logo, highlight: false },
      { title: 'HTML',       img: html_logo,     highlight: false },
      { title: 'CSS',        img: css_logo,      highlight: false },
    ],
  },
  {
    label: 'Databases',
    accent: 'border-orange-400',
    labelColor: 'text-orange-500 bg-orange-50 border-orange-200',
    skills: [
      { title: 'MySQL',   img: mysql_logo,   highlight: false },
      { title: 'MongoDB', img: mongodb_logo, highlight: false },
    ],
  },
  {
    label: 'DevOps & Cloud',
    accent: 'border-purple-400',
    labelColor: 'text-purple-600 bg-purple-50 border-purple-200',
    skills: [
      { title: 'Docker', img: docker_logo, highlight: false },
      { title: 'Kafka',  img: kafka_logo,  highlight: false },
      { title: 'AWS',    img: aws_logo,    highlight: false },
    ],
  },
];

function Skills() {
  return (
    <section id='skills' className='flex flex-col items-center gap-12'>

      {/* Heading */}
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          My <span className='text-main'>Skills</span>
        </h1>
        <div className='w-16 h-1 bg-main mx-auto mt-3 rounded-full' />
        <p className='text-gray-500 mt-4 text-base max-w-xl mx-auto'>
          Technologies I work with — organized by domain.
        </p>
      </div>

      {/* Category groups */}
      <div className='w-full flex flex-col gap-10'>
        {categories.map((cat) => (
          <div key={cat.label}>
            {/* Category label + rule */}
            <div className='flex items-center gap-3 mb-5'>
              <span className={`text-xs font-semibold uppercase tracking-widest border px-3 py-1 rounded-full ${cat.labelColor}`}>
                {cat.label}
              </span>
              <div className={`flex-1 h-px border-t-2 border-dashed ${cat.accent} opacity-40`} />
            </div>

            {/* Skills row */}
            <div className='flex flex-wrap gap-4'>
              {cat.skills.map((skill) => (
                <div
                  key={skill.title}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border bg-white
                    transition-all duration-300 cursor-default w-28
                    ${skill.highlight
                      ? 'border-main shadow-lg shadow-main/20 ring-1 ring-main/30 scale-105'
                      : 'border-gray-100 shadow hover:shadow-md hover:-translate-y-0.5'
                    }`}
                >
                  {skill.highlight && (
                    <span className='absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-main text-white px-2 py-0.5 rounded-full whitespace-nowrap'>
                      Core
                    </span>
                  )}
                  <img src={skill.img} alt={skill.title} className='w-12 h-12 object-contain' />
                  <span className={`text-xs font-semibold text-center leading-tight ${skill.highlight ? 'text-main' : 'text-gray-600'}`}>
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
