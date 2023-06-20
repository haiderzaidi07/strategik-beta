import { useEffect, useState } from "react"
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext'

const Contribute = () => {

  const [courseList, setCourseList] = useState([])
  const [course, setCourse] = useState("")
  const [category, setCategory] = useState("")
  const [fileName, setFileName] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useAuthContext()

  useEffect(() => {

    axios.get('http://localhost:2000/contribute')
    .then(res => {
      setCourseList(res.data)
    })
    .catch(err => console.error(err))
    
  }, [])
  
  const submitContribution = e => {
    e.preventDefault()
    
    // console.log(course, category, fileName, file)
    
    const reader = new FileReader()
    
    reader.readAsDataURL(file)
    
    reader.onload = () => {
      // console.log(reader.result)
      
      axios.post('http://localhost:2000/contributing', {
        course,
        category,
        fileName,
        file: reader.result
      }, {
        headers: {
          authorization: `Bearer ${user.token}`
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
    }
    
    reader.onerror = (err) => {
      console.log(err)
    }

    setCourse("")
    setCategory("")
    setFileName("")
    setFile(null)
  }

  return (
    <div>
      <img
        className="absolute -z-10 w-full h-screen opacity-80"
        src="/icons/bg-abstract-lines.svg"
        alt=""
      />
      <form
        className="bg-gradient-to-b from-teal-200 to-emerald-200 shadow-lg rounded-lg text-slate-600 md:text-xl font-semibold flex flex-col mx-4 sm:mx-10 md:w-1/2 xl:w-1/3 2xl: md:mx-auto p-10 my-20 md:my-32"
        encType="multipart/form-data"
        onSubmit={submitContribution}
      >
        <span className="text-teal-500 text-lg font-bold text-center md:text-2xl py-4"
        >CONTRIBUTE</span>
        <label className="my-4">Course</label>
        <select
          className="border-none bg-white text-md h-full p-2 font-normal appearance-none"
          name="course"
          id="course"
          onChange={e => setCourse(e.target.value)}
        >
          <option>--Select</option>
          {courseList.map(course => (
            <option key={course._id} value={course.courseCode}>{course.courseCode}</option>
          ))}
        </select>

        <span className="text-slate-500 text-xs md:text-sm mt-2"
        >Incase course is not listed, <a
          className="text-teal-600"
          href="https://forms.gle/CaNNPza3NFffd3Mj7"
          target="_blank"
          rel="noreferrer"
        >
            click here
          </a></span>

        <label className="my-4">Category</label>
        <select
          className="border-none bg-white text-md h-full p-2 font-normal appearance-none"
          name="category"
          id="category"
          onChange={e => setCategory(e.target.value)}
        >
          <option>--Select</option>
          <option value="Quizzes">Quizzes</option>
          <option value="MidsFinals">Mid or Final</option>
          <option value="Assignments">Assignments</option>
        </select>

        <label className="my-4">File Name:</label>
        <input
          className="py-2 px-4 font-light rounded-md"
          type="text"
          name="filename"
          placeholder="file name"
          onChange={e => setFileName(e.target.value)}
        />

        <input
          className="file:text-xs file:hover:bg-teal-100 file:hover:text-teal-700 file:active:translate-y-1 file:transition-all file:duration-200 file:mt-10 file:text-teal-600 file:border-0 file:rounded-xl file:shadow-md file:bg-white md:file:text-sm file:py-2 file:px-4"
          type="file"
          accept=".pdf"
          name="file"
          onChange={e => setFile(e.target.files[0])}
        />
        <label className="text-sm p-2 font-semibold"> Only PDFs* </label>
        <button
          className="block mx-auto my-4 px-6 py-2 rounded-lg shadow-md bg-white text-teal-600 hover:-translate-y-1 active:translate-y-1 transition-all hover:border-[2px] border-teal-500 duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contribute
