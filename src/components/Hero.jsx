import React from 'react'
import myPhoto from '../assets/myPhoto.jpeg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import resume from '../../public/resume/Sumit Sharma Resume.pdf'

function Hero() {
  return (
    <main id='home' className='flex justify-between items-center w-full max-lg:flex-col'>
        <div className='flex flex-col justify-center items-center max-lg:mt-20'>
          <div >
          <h3 className='text-2xl my-5 font-medium'>hello,</h3>
          <h1 className='text-6xl text-black font-bold max-lg:text-4xl'>I'm <span className='text-main'>Sumit Sharma,</span>
          <br />
          Frontend Developer
          </h1>
          <p className='text-wrap my-5 text-lg max-w-[70%] font-normal text-gray-500 max-md:text-base max-md:max-w-[100%]'>
          Welcome to my web developer portfolio! . I invite you to explore my portfolio and discover the projects that showcase my expertise and creativity.
          </p>
          <div className='flex gap-4'>
            <a href="https://www.linkedin.com/in/sumit-sharma-47820b216/" target='_blank' className='p-3 rounded-full shadow-md cursor-pointer hover:shadow-main'>
              <FaLinkedinIn className='h-8 w-8'/>
            </a>
            <a href="https://www.instagram.com/sumit_sharmaa27/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1" target='_blank' className='p-3 rounded-full shadow-md cursor-pointer hover:shadow-main'>
              <FaInstagram className='h-8 w-8'/>
            </a>
            <a href="https://github.com/Sumit-exe" target='_blank' className='p-3 rounded-full shadow-md cursor-pointer hover:shadow-main'>
              <FaGithub className='h-8 w-8'/>
            </a>
          </div>
          
            <a href={resume} download={'Sumit_Sharma_Resume'}>
          <button className='btn my-5'>Download CV</button>
          </a>
          
          </div>
        </div>


        <div className='flex items-center justify-center h-screen max-lg:h-2/5'>
            <img src={myPhoto} alt="heroImage" className='w-3/4 heroImage'/>
        </div>

    </main>
  )
}

export default Hero