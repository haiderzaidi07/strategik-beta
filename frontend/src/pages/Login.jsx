import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, isLoading, error } = useLogin()

  const loggingIn = e => {
    e.preventDefault()

    login(username, password)

    setUsername("")
    setPassword("")
  }

  return (
    <div>
      <div className="bg-teal-100">
        <img className="absolute -z-10 w-full h-screen" src="/icons/bg-abstract-lines.svg" alt="lines-vector"></img>
        {/* <!-- Sign In box --> */}
        <div className="bg-white rounded-2xl py-16 px-10 sm:w-96 shadow-xl sm:ml-auto my-36 mx-4 sm:mx-20">

          <img src="/icons/loginIllustration.svg" alt=""></img>
          <h1 className="font-semibold text-slate-500 text-lg sm:text-2xl text-center py-2 mt-4 mb-4">Log In</h1>


          <form onSubmit={loggingIn}>

            <input
              className="text-center w-full py-3 my-2 sm:text-lg bg-slate-100 rounded-md shadow-md"
              type="text"
              name="username"
              id="Email"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className="text-center w-full py-3 my-2 sm:text-lg bg-slate-100 rounded-md shadow-md"
              type="password"
              name="password"
              id="Password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <button
              className="block mt-10 bg-teal-400 text-white font-semibold sm:text-lg w-full py-3 my-4 rounded-lg shadow-md"
              disabled={isLoading}
            >
              Sign In
            </button>
            { error && <div>{error}</div> }
          </form>
          {/* <!-- horizontal line stroke effect  --> */}
          {/* <!-- disabled in beta version */}
          {/* <div className="flex items-center justify-center">
            <hr
              className="bg-gradient-to-l from-teal-500 to-transparent h-[4px] w-1/5 border-none"
              />
              <span className="px-2">Or Sign In with</span>
              <hr
              className="bg-gradient-to-r from-teal-500 to-transparent h-[4px] w-1/5 border-none"
              />
            </div>
            <button
            className="flex items-center justify-start bg-teal-400 px-4 py-2 my-4 rounded-lg w-full shadow-md"
            >
            <img
              className="border-4 border-white bg-white rounded-full"
              src="/icons/GoogleLogo.svg"
              alt="Google-logo-icon"
            />
            <span className="text-white font-semibold text-lg mx-auto"
              >Sign In with Google</span
            >
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Login
