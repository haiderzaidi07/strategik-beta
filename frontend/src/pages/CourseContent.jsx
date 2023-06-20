import { Link } from 'react-router-dom'

const CourseContent = () => {

    return (
      <div>
        <div className="mt-16">
        <h1 className="text-center text-slate-600 mx-auto font-bold text-2xl">
          Resources
        </h1>
        <p
          className="lg:w-1/2 mx-auto px-4 sm:px-10 lg:px-20 text-lg text-slate-500 text-center"
        >
          Instead of needlessly searching elsewhere, all that you need is
          available here
        </p>
      </div>
      <div
        className="flex flex-col sm:flex-row sm:items-stretch items-center w-2/3 mx-auto justify-center text-center my-4 mb-10"
      >
        <div
          className="border-[3px] border-teal-500 p-10 lg:text-xl font-semibold text-slate-600 shadow-md m-4 w-52 bg-white rounded-md hover:translate-x-2 sm:hover:-translate-y-2 sm:hover:translate-x-0 transition-transform duration-300 ease-in-out"
        >
          <Link to="midFinals">
            <img className="mb-4 mx-auto" src="/icons/poster.svg" alt="icon" />
            <h2>Mids & Finals</h2>
          </Link>
        </div>
        <div
          className="border-[3px] border-teal-500 p-10 lg:text-xl font-semibold text-slate-600 shadow-md m-4 w-52 bg-white rounded-md hover:translate-x-2 sm:hover:-translate-y-2 sm:hover:translate-x-0 transition-transform duration-300 ease-in-out"
        >
    
          <Link to="quizzes">
            <img className="mb-4 mx-auto" src="/icons/sticky-note.svg" alt="icon" />
            <h2>Quizzes</h2>
          </Link>
        </div>
        <div
          className="border-[3px] border-teal-500 p-10 lg:text-xl font-semibold text-slate-600 shadow-md m-4 w-52 bg-white rounded-md hover:translate-x-2 sm:hover:-translate-y-2 sm:hover:translate-x-0 transition-transform duration-300 ease-in-out"
        >
          <Link to="assignments">
            <img className="mb-4 mx-auto" src="/icons/file-folder.svg" alt="icon" />
            <h2>Assignments</h2>
          </Link>
        </div>
      </div>
      </div>
    )
}

export default CourseContent
