function About() {
  return (
    <section id="about" className="flex flex-col items-center gap-8 ">
      <h1>
        About <span className="text-main">Me</span>
      </h1>

      <div className="max-w-[80%] max-md:max-w-[100%]">
        <p className=" text-[20px] text-center text-gray-700 max-sm:text-[14px]">
          My Name is Sumit Sharma, I'm 23 year old passionate and dedicated <strong>Software
          developer</strong> from Mumbai. I have Experience in Technologies like <strong>Java Full Stack And MERN Stack</strong> . With a blend of technical
          expertise and creative problem-solving.
        </p>
      </div>

      <div className="flex gap-10 max-lg:flex-col max-md:items-center min-h-auto">
        <div className="border p-6 rounded-xl flex flex-col justify-center gap-3  w-[30rem] shadow-xl max-sm:h-full max-sm:w-[90%]">
          <h2 className="text-2xl font-semibold text-center">Experience</h2>
          <div>
            <h3 className="font-medium text-lg">
              IBM{" "}
              <span className="text-sm text-gray-900 font-medium">
                - Associate System Engineer{" "}
              </span>
            </h3>
            <p className="text-sm text-gray-900 font-medium">
              {" "}
              (March 2024 – Present)
            </p>
            <div>
              <p>I work as Java Springboot Backend Developer in IBM</p>
              <p>Technologies I use Here:</p>
              <strong><p>Java | SpringBoot | CassandraDB | Kafka | Junit</p></strong>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg">
              YoursThatSenior -{" "}
              <span className="text-sm text-gray-900 font-medium">
                Frontend Development Intern
              </span>
            </h3>
            <p className="text-sm text-gray-900 font-medium">
              {" "}
              (Jan. 2024 – Feb. 2024)
            </p>
            <p>
              Created the Frontend of a Discount Coupon site for our client.
            </p>
            <p>Technologies I used Here:</p>
            <strong><p>React.js | Tailwind | Redux | JavaScript</p></strong>
          </div>
        </div>

        <div className="border p-6 rounded-xl flex flex-col  gap-3  w-[30rem] shadow-xl max-sm:h-full max-sm:w-[90%]">
          <h2 className="text-2xl font-semibold text-center">Education</h2>
          <div>
            <h3 className="font-medium text-lg">
              Lokmanya tilak college of engineering - Navi Mumbai
            </h3>
            <p>B.tech - Computer Science - (2019-2023)</p>
            <p>CGPA - 8.6</p>
          </div>
          <div>
            <h3 className="font-medium text-lg">Model College </h3>
            <p>HSC - Science - (2017-2019)</p>
            <p>Percentage - 80%</p>
          </div>
          <div>
            <h3 className="font-medium text-lg">Holy Faith High School </h3>
            <p>SSC (2017)</p>
            <p>Percentage - 82%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
