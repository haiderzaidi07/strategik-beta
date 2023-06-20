import { useState, useEffect } from "react"
import axios from "axios"
import { useAuthContext } from "../hooks/useAuthContext"

const Dashboard = () => {

  const [contributions, setContributions] = useState([])
  const [courseTitle, setCourseTitle] = useState("")
  const [courseCode, setCourseCode] = useState("")
  // const [selectedContribution, setSelectedContribution] = useState("")
  const { user } = useAuthContext()

  useEffect(() => {

    axios.get("http://localhost:2000/xlzjoorD6C")
      .then(res => {
        // console.log(res.data)
        setContributions(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  const addCourse = e => {
    e.preventDefault()

    axios.post('http://localhost:2000/addCourse', 
    {
      courseTitle, 
      courseCode
    }, 
    {
      headers: {
        authorization: `Bearer ${user.token}`
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.error(err))
    
    setCourseTitle('')
    setCourseCode('')
  }

  const approveContribution = (contribution) => {
    // console.log(contribution)

    axios.post('http://localhost:2000/approveContribution', contribution, {
      headers: {
        authorization: `Bearer ${user.token}`
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.error(err))
  }

  const deleteContribution = (id) => {
    // console.log(id)

    axios.delete(`http://localhost:2000/deleteContribution/${id}`, {
      headers: {
        authorization: `Bearer ${user.token}`
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.error(err))
  }

  return (
    <div>
      <hr className="w-full h-1 bg-teal-400" />
      <section className="bg-white sm:mx-16 my-16 h-screen rounded-lg">
        <h1
          className="text-3xl text-center sm:text-left text-white block font-bold p-4 bg-teal-400 rounded-t-lg"
        >
          Dashboard
        </h1>
        {/* <!-- Content  --> */}
        <div
          className="flex flex-col 2xl:flex-row items-center jusitify-center bg-teal-100 h-screen px-10"
        >
          {/* <!-- Recent Contributions  --> */}
          <table
            className="text-sm lg:text-lg bg-white opacity-50 border-collapse shadow-lg m-4 w-full 2xl:w-2/3 rounded-md"
          >
            {/* <!-- table heading  --> */}
            <tr className="text-left">
              <th className="py-4 pl-6">Name</th>
              <th className="py-4 pl-6">File</th>
              <th className="py-4 pl-6">Course</th>
              <th className="py-4 pl-6">Category</th>
              <th className="py-4 pl-6 hidden lg:inline-block">Cloudinary ID</th>
            </tr>

            {/* <!-- table entry --> */}
            {contributions.map(contribution => (
              <tr
                className="transition-transform duration-200 hover:bg-teal-400 hover:bg-opacity-25 hover:translate-x-1"
                key={contribution._id}
              >
                <td className="pl-6 py-4">{contribution.name}</td>
                <td className="pl-6 py-4">
                  <a href={`${contribution.pdf}`}
                  >{contribution.fileName}</a>
                </td>
                <td className="pl-6 py-4">{contribution.course}</td>
                <td className="pl-6 py-4">{contribution.category}</td>
                <td className="pl-6 py-4 hidden lg:inline-block">
                  {contribution.cloudinaryID}
                </td>
                <td className="px-4">
                  <img
                    className="min-w-[20px] w-7 cursor-pointer"
                    src="./icons/tickIcon.svg"
                    alt="tickBtn"
                    onClick={() => approveContribution(contribution)}
                    />
                </td>
                <td className="px-4">
                  <img
                    className="min-w-[20px] w-7 cursor-pointer"
                    src="./icons/trashIcon.svg"
                    alt="delButton"
                    onClick={() => deleteContribution(contribution._id)}
                  />
                </td>
              </tr>
            ))}
          </table>

          {/* <!-- Add new course  --> */}
          <div
            className="bg-white bg-opacity-50 w-full 2xl:w-1/4 h-72 py-4 px-10 rounded-md flex flex-col items-center justify-between drop-shadow-md"
          >
            <h2 className="text-slate-600 font-bold text-center text-lg mb-6">
              Add New Course
            </h2>
            <form onSubmit={addCourse}>
              <h3 className="text-slate-600 font-semibold">Course Title :</h3>
              <input
                className="py-1 px-2"
                type="text"
                name="courseTitle"
                id=""
                placeholder="Course title"
                onChange={e => setCourseTitle(e.target.value)}
              />
              <h3 className="text-slate-600 font-semibold">Course Code :</h3>
              <input
                className="px-2 py-1"
                type="text"
                name="courseCode"
                id=""
                placeholder="Course Code"
                onChange={e => setCourseCode(e.target.value)}
              />
              <button
                className="block mx-auto my-4 px-4 py-1 active:-translate-y-2 active:shadow-none shadow-lg hover:bg-teal-500 hover:text-white bg-white text-teal-500 border-2 border-teal-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
