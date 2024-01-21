import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ProjectSlider() {

    const projects = [
        {
            name:'Wheather App',
            url:'https://sumits-weather-apps.netlify.app/',
            stack:'HTML | CSS | JAVASCRIPT | API'
        },
        {
            name:'Calculator App',
            url:'',
            stack:'HTML | CSS | JAVASCRIPT '
        },
        {
            name:'Wheather App',
            url:'',
            stack:'HTML | CSS | JAVASCRIPT | API'
        },
        {
            name:'TIC TAC TOE',
            url:'',
            stack:'HTML | CSS | JAVASCRIPT '
        },
        {
            name:'News App',
            url:'',
            stack:'REACT.js | BOOTSTRAP | API'
        },
        {
            name:'PhotoGrapz - A portfolio',
            url:'',
            stack:'HTML | CSS | JAVASCRIPT'
        },
        {
            name:'Music Streaming Site',
            url:'',
            stack:'HTML | CSS | JAVASCRIPT'
        },
        {
            name:'Multi Step Form',
            url:'',
            stack:'HTML | CSS | JAVASCRIPT'
        },
        {
            name:'Stack Game',
            url:'',
            stack:'HTML | CSS | JAVASCRIPT'
        },
        {
            name:'Todo App',
            url:'',
            stack:'HTML | CSS | JAVASCRIPT'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4 ,
        slidesToScroll: 2
      };

  return (
    <div>
      <div className='my-10'>
         <Slider {...settings  } >
        {
            projects.map((project)=>(
                <div className='border-2 px-4 py-2 rounded-lg shadow-md h-32 relative hover:shadow-xl cursor-pointer border-t-main  border-b-main'>
                    <div></div>
                    <div>
                        <p className='text-xl font-semibold text-gray-800'>{project.name}</p>
                        <p className='line-clamp-2'>Stack : {project.stack}</p>
                    </div>
                    <a href={project.url} target='_blank' className='flex items-center justify-start gap-2 absolute left-3 bottom-3 hover:text-main'>Preview <FaExternalLinkAlt  /></a>
                </div>
            ))
        }
      </Slider>
      </div>
    </div>
  )
}
