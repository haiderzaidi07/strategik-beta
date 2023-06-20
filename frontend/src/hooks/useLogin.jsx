import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"

export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = (username, password) => {

        setIsLoading(true)
        setError(null)

        axios.post('http://localhost:2000/users/login', {
            username,
            password
        })
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch({type: 'LOGIN', payload: res.data})
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
            setError(err.response.data.message)
        })
    }

    return { login, error, isLoading }
} 