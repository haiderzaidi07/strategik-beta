import Footer from "../components/Footer"

const About = () => {
  return (
    <div>

      <div id="dimScreen" className="hidden fixed w-full h-full bg-slate-800 z-10 opacity-50"></div>
      
      {/* <!-- About Us --> */}
      <div className="mt-32 w-2/3 mx-auto relative">
        <h1
          className="text-teal-600 font-thick text-3xl text-center lg:text-left py-3"
        >
          About Us
        </h1>
        <hr className="bg-teal-600 bg-opacity-50 h-[2px]" />
        {/* <!-- Haider Zaidi --> */}

        <div className="relative">
          <span
            className="bg-teal-600 lg:hidden translate-x-1/2 right-1/2 top-[72px] w-[140px] h-[140px] [clip-path:circle()] absolute"
          >
          </span>
          <img
            style={{"clipPath": "circle()"}}
            className="rounded-full mx-auto w-32 lg:hidden"
            src="./haider-compressed.jpg"
            alt=""
          />

          <div className="flex justify-between items-center">
            <div className="text-center lg:text-left">
              <h2
                className="text-teal-600 font-bold text-2xl lg:pt-10 pb-2 -mt-4 sm:mt-0 sm:py-8"
              >
                Haider Zaidi
              </h2>
              <p
                className="cursor-pointer text-sm font-light sm:text-lg md:text-xl tracking-wider md:w-1/2 xl:w-2/3 px-10 sm:px-0 mx-auto lg:mx-0"
              >
                Hello, I'm Haider Zaidi, a CS student from Batch 31 at the GIK
                Institute. As a Full Stack Developer, contributing on both Front
                but primarily the Backend for this project has been a great
                learning experience for me and I hope to get more of such
                opportunities in the future. Feel free to reach out to me for any
                personal queries using the links below.
              </p>
              {/* <!-- social Icons  --> */}
              <div className="flex justify-between w-32 mt-4 mx-auto lg:mx-0">
                <a
                  href="https://www.linkedin.com/in/haider-zaidi-/"
                  target="_blank" rel="noreferrer"
                >
                  <img
                    className="w-7 hover:-translate-y-1 active:translate-y-1 transition-transform duration-300"
                    src="./icons/linkedInIcon.svg"
                    alt="social-icon"
                  />
                </a>
                <a href="https://github.com/haiderzaidi07" target="_blank" rel="noreferrer">
                  <img
                    className="w-7 hover:-translate-y-1 active:translate-y-1 transition-transform duration-300"
                    src="./icons/githubIcon.svg"
                    alt="social-icon"
                  />
                </a>
                <a href="mailto:haiderzaidi.work@gmail.com">
                  <img
                    className="w-10 hover:-translate-y-1 active:translate-y-1 transition-transform duration-300"
                    src="./icons/mailIcon.svg"
                    alt="social-icon"
                  />
                </a>
              </div>
            </div>
            <div
              style={{"clipPath": "circle()"}}
              className="hidden lg:block bg-teal-600 absolute 2xl:mt-10 p-1 right-0"
            >
              <img
                style={{"clipPath": "circle()"}}
                className="border-4 hidden lg:block w-52 lg:w-64"
                src="./haider-compressed.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- Talha Imtiaz  --> */}
        <div className="mt-32 mb-48 py-2 relative">
          <span
            className="bg-teal-600 lg:hidden translate-x-1/2 right-1/2 top-[2px] w-[150px] h-[150px] [clip-path:circle()] absolute"
          >
          </span>

          <img
            style={{"clipPath": "circle()"}}
            className="rounded-full mx-auto w-36 lg:hidden"
            src="./talhaProfile-compressed.jpg"
            alt="profile"
          />

          <div className="flex justify-between items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-teal-600 font-bold text-2xl pt-10 pb-2 sm:py-8">
                Talha Imtiaz
              </h2>
              <p
                className="cursor-pointer text-sm font-light sm:text-lg md:text-xl tracking-wider md:w-1/2 xl:w-2/3 mx-auto lg:mx-0 px-10 sm:px-0"
              >
                Hey, I am a sophomore at GIK Institute doing a bachelor's in
                Computer Science. My ever-growing interest in designing made me
                learn UI/UX and Front-end development which helped me build this
                project. I have been teaching students for a while and if you have
                any personal or business queries, feel free to reach out at any of
                the listed social platforms. I will be happy to help you out.
              </p>
              {/* <!-- social Icons  --> */}
              <div className="flex justify-between w-32 mt-4 mx-auto lg:mx-0">
                <a
                  href="https://www.linkedin.com/in/talha-imtiaz342/"
                  target="_blank" rel="noreferrer"
                >
                  <img
                    className="w-7 hover:-translate-y-1 active:translate-y-1 transition-transform duration-300"
                    src="./icons/linkedInIcon.svg"
                    alt="social-icon"
                  />
                </a>
                <a href="https://github.com/talhaimtiaz09" target="_blank" rel="noreferrer">
                  <img
                    className="w-7 hover:-translate-y-1 active:translate-y-1 transition-transform duration-300"
                    src="./icons/githubIcon.svg"
                    alt="social-icon"
                  />
                </a>
                <a href="mailto:talhaimtiaz2003@gmail.com">
                  <img
                    className="w-10 hover:-translate-y-1 active:translate-y-1 transition-transform duration-300"
                    src="./icons/mailIcon.svg"
                    alt="social-icon"
                  />
                </a>
              </div>
            </div>

            <div
              style={{"clipPath": "circle()"}}
              className="hidden lg:block bg-teal-600 p-1 absolute right-0"
            >
              <img
                style={{"clipPath": "circle()"}}
                className="hidden lg:block w-52 lg:w-64"
                src="./talhaProfile-compressed.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default About
