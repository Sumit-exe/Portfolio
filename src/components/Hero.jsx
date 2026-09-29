import { useState, useEffect } from 'react'
import myPhoto from '../assets/myPhoto.jpeg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import resume from '../../public/resume/Sumit Sharma Resume.pdf'

const roles = [
  'Software Developer',
  'GenAI Engineer',
  'Agentic AI Engineer',
  'Java Backend Engineer',
];

// Quick stat chips shown below the tagline
const stats = [
  { label: 'Experience', value: '3+ yr' },
  { label: 'Microservices', value: '30+' },
  { label: 'AI Agents', value: '10+' },
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <main id='home' className='relative flex justify-between items-center w-full min-h-screen max-lg:flex-col max-lg:pt-32 max-lg:pb-16 gap-10'>

      {/* dot grid only — blobs live at page level now */}
      <div className='pointer-events-none absolute inset-0 hero-dots opacity-30' />

      {/* ── Left content ── */}
      <div className='relative flex flex-col justify-center gap-5 max-w-xl z-10'>

        {/* eyebrow */}
        <div className='flex items-center gap-2'>
          <span className='w-8 h-0.5 bg-main rounded-full' />
          <span className='text-main font-semibold tracking-widest text-xs uppercase'>Hello, World!</span>
        </div>

        {/* name */}
        <h1 className='text-6xl font-extrabold leading-tight max-lg:text-4xl text-gray-900'>
          I'm <span className='text-main'>Sumit Sharma</span>
        </h1>

        {/* typing role */}
        <h2 className='text-2xl font-semibold text-gray-700 max-lg:text-xl min-h-[2.2rem] flex items-center gap-1'>
          <span>{displayed}</span>
          <span className='typing-cursor'>|</span>
        </h2>

        {/* tagline */}
        <p className='text-gray-500 text-base leading-relaxed max-w-md'>
          I build <strong className='text-gray-700'>distributed backend systems</strong> at IBM and craft{' '}
          <strong className='text-gray-700'>GenAI & Agentic AI applications</strong> with LangChain,
          RAG pipelines, and LLM integrations — because one stack is never enough.
        </p>

        {/* stat chips */}
        <div className='flex gap-4 flex-wrap'>
          {stats.map((s) => (
            <div key={s.label} className='flex flex-col items-center border border-gray-200 rounded-xl px-4 py-2 bg-white shadow-sm'>
              <span className='text-xl font-extrabold text-main leading-none'>{s.value}</span>
              <span className='text-[10px] text-gray-500 uppercase tracking-wider mt-0.5'>{s.label}</span>
            </div>
          ))}
        </div>

        {/* social + cta */}
        <div className='flex items-center gap-3 flex-wrap'>
          <a href="https://www.linkedin.com/in/sumit-sharma-47820b216/" target='_blank' rel='noreferrer'
            className='p-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:border-main hover:text-main transition-all duration-200'>
            <FaLinkedinIn className='h-5 w-5' />
          </a>
          <a href="https://www.instagram.com/sumit_sharmaa27/" target='_blank' rel='noreferrer'
            className='p-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:border-main hover:text-main transition-all duration-200'>
            <FaInstagram className='h-5 w-5' />
          </a>
          <a href="https://github.com/Sumit-exe" target='_blank' rel='noreferrer'
            className='p-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:border-main hover:text-main transition-all duration-200'>
            <FaGithub className='h-5 w-5' />
          </a>
          <a href={resume} download='Sumit_Sharma_Resume'>
            <button className='btn ml-2'>Download CV</button>
          </a>
        </div>
      </div>

      {/* ── Right – photo ── */}
      <div className='relative flex items-center justify-center z-10'>
        {/* spinning dashed ring */}
        <div className='absolute w-[320px] h-[320px] max-lg:w-[240px] max-lg:h-[240px] rounded-full border-2 border-dashed border-main/30 spin-slow' />
        {/* solid glow ring */}
        <div className='absolute w-[280px] h-[280px] max-lg:w-[210px] max-lg:h-[210px] rounded-full bg-gradient-to-br from-main/20 to-purple-300/20 blur-2xl' />
        <img
          src={myPhoto}
          alt='Sumit Sharma'
          className='relative w-64 max-lg:w-48 heroImage z-10'
        />
      </div>

    </main>
  )
}

export default Hero
