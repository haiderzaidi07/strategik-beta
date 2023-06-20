import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Assignment = () => {

  const params = useParams();

  const [assignments, setAssignments]  = useState([])

  useEffect(() =>{

      axios.get(`http://localhost:2000/courses/${params.id}/courseContent/assignments`)
      .then(res => {
          // console.log(res.data)
          setAssignments(res.data)
      })
      .catch(err => console.error(err))

  }, [params.id])
    
  return (
    <div>
      {/* <!-- hero section  --> */}
    <div className="w-2/3 mx-auto my-20">
      {/* <!-- main heading --> */}
      <h1 className="font-bold text-teal-600 text-lg md:text-2xl py-6">
        Assignments
      </h1>
      {/* <!-- data --> */}

      <ul>


      {assignments.map(item => (
        <li key={item._id}>
          <div className="flex justify-between hover:translate-x-2 transition-transform duration-200">
              <div>
                <a href={item.fileLink} target="_blank" rel="noreferrer">
                  <img
                    src="/icons/fileIcon.svg"
                    alt="file-icon"
                    className="inline-block w-8 sm:w-10 md:w-auto"
                  />
                  <h2 className="mx-4 inline-block text-sm sm:text-md">
                    {item.fileName}
                  </h2>
                </a>
              </div>
            </div>
            <hr className="w-full h-[2px] bg-teal-400 my-2" />
        </li>
      ))}
      </ul>

      {/* <!-- data --> */}
      <div
        className="flex justify-between hover:translate-x-2 transition-transform duration-200"
      >
        <div>
          <img
            src="/icons/fileIcon.svg"
            alt="file-icon"
            className="inline-block w-8 sm:w-10 md:w-auto"
          />
          <h2 className="mx-4 inline-block text-sm sm:text-md">Placeholder</h2>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-teal-400 my-2" />
    </div>
    </div>
  )
}

export default Assignment
