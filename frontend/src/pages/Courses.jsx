import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

const Courses = () => {

    const [courses, setCourses]  = useState([])

    useEffect(() =>{

        axios.get("http://localhost:2000/courses")
        .then(res => {
            // console.log(res.data)
            setCourses(res.data)
        })
        .catch(err => console.error(err))

    }, [])
    
  return (
    <div>
        <section className="mt-20 h-screen">
            <h1
                className="text-teal-600 text-lg md:text-3xl text-center font-bold tracking-wide mt-20"
            >
                List of Courses
            </h1>
            <div className="bg-white rounded-lg px-10 sm:w-2/3 sm:px-0 mx-auto p-10 mt-5">
                <ul>
                {courses.map(item => (
                    <li key={item._id}>
                        <Link to={`${item._id}/courseContent`}>
                        <div
                        className="text-slate-600 text-sm sm:text-md transition-all duration-200 hover:translate-x-2">
                        <img
                        className="inline-block w-8 sm:w-10 md:w-auto"
                        src="./icons/folder-icon.svg"
                        alt="folder"
                        />{item.courseCode} - {item.courseTitle}
                        </div>
                        <hr className="w-full h-[2px] bg-teal-400 my-2" />
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Courses
