import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useSignOut } from '../hooks/useSignOut'

function NavBar() {

  const { user } = useAuthContext()
  const { signOut } = useSignOut()

  return (
    <div>
      <nav className="flex justify-between text-teal-500 bg-white items-center">
        <span className="mx-4 py-2 font-bold text-xl">
          <Link to="/">
            Strate<span className="text-slate-500">GIK</span>
          </Link>
        </span>
        <img id="menuIcon" className="w-6 m-4 md:hidden z-30" src="./icons/menuIcon.svg" alt="hamburger-icon"></img>
        <ul data-ul className="md:flex-row md:top-auto md:w-auto bg-slate-50 pb-5 md:pb-px md:bg-white -top-96 text-center flex flex-col items-center w-full md:relative fixed z-20">

          <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/">Home</a></li>
          <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/courses">Course List</a></li>
          <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/about">About</a></li>
          
          { user ? ( 
            <>
              <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/contribute">Contribute</a></li>
              <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0" onClick={() => signOut()}>Sign Out</li>
              { user.dashboardAccess ?
                <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><Link to="/xlzjoorD6C">Dashboard</Link></li>
                : ""
              }
              <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0">{user.username}</li>
              <img className="w-7 mx-6 ml-2 md:block hidden hover:-translate-y-1 active:translate-y-1 transition-transform duration-700 profileIcon" src="./icons/profileIcon.svg" alt="profileIcon"></img>
            </>
          ) : (
            <>
              <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/users/login">Log In</a></li>
              <li className="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/users/signUp">Sign Up</a></li>
            </>
        )}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
