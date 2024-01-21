import React from 'react'

function About() {
  return (
    <section id="about" className='flex flex-col items-center gap-8 '>
        <h1>About <span className='text-main'>Me</span></h1>

        <div className='max-w-[60%] max-md:max-w-[100%]'>
            <p className=' text-[20px] text-center text-gray-700 max-sm:text-[14px]'>My Name is  Sumit Sharma, I'm 23 year old passionate and dedicated Web developer. From mumbai with a strong focus on creating seamless and visually appealing digital experiences. With a blend of technical expertise and creative problem-solving, What sets me apart as a web developer is my meticulous attention to detail and passion for clean and efficient code</p>
        </div>

        <div className='flex gap-10 max-lg:flex-col max-md:items-center'>
            <div className='border p-6 rounded-xl flex flex-col  gap-3 h-[22rem] w-[30rem] shadow-xl max-sm:h-full max-sm:w-[90%]'>
                <h2 className='text-2xl font-semibold text-center'>Education</h2>
                <div>
                    <h3 className='font-medium text-lg'>Lokmanya tilak college of engineering - Navi Mumbai</h3>
                    <p>B.tech - Computer Science - (2019-2023)</p>
                    <p>CGPA - 8.6</p>
                </div>
                <div>
                    <h3 className='font-medium text-lg'>Model College </h3>
                    <p>HSC - Science - (2017-2019)</p>
                    <p>Percentage - 80%</p>
                </div>
                <div>
                    <h3 className='font-medium text-lg'>Holy Faith High School </h3>
                    <p>SSC (2017)</p>
                    <p>Percentage - 82%</p>
                </div>
            </div>

            <div className='border p-6 rounded-xl flex flex-col justify-center gap-3 h-[22rem] w-[30rem] shadow-xl max-sm:h-full max-sm:w-[90%]'>
                <h2 className='text-2xl font-semibold text-center'>Experience</h2>
                <div>
                    <h3 className='font-medium text-lg'>BRAIN O VISION </h3>
                    <p>REACT JS WORKSHOP - (July 2021 – August 2021)
</p>
                    <p>Gained practical experience in creating interactive user interfaces efficiently.</p>
                </div>
                <div>
                    <h3 className='font-medium text-lg'>TCR </h3>
                    <p>FRONTEND WORKSHOP - (March 2021 – April 2021)</p>
                    <p>Gained essential frontend development skills through hands-on project experience</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default About