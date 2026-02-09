import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  const [error, setError] = useState('')
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    const userData = {
      username, password}
      console.log(userData)
      try {
        const response = await  axios.post('http://localhost:8000/api/v1/token/', userData)
        localStorage.setItem('access_token', response.data.access)
        localStorage.setItem('refresh_token', response.data.refresh)
        console.log('Login successful')
        setIsLoggedIn(true)
        navigate('/')
      }catch(error){
        console.error('Invalid Credentials')
        setError('Invalid username or password. Please try again.')
      }finally{
        setLoading(false)
      }
  }
  return (
    <>
    <div className='text-light container'>
      <div className='row justify-content-center '>
        <div className='col-md-6 bg-light-dark p-5 rounded'>
            <h3 className='text-light text-center'>Login to our Portol</h3>
            <form onSubmit={handleLogin}>
              <div className='mb-3'>
                 <input type="text" className="form-control" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>

              {error && <div className="text-danger alert alert-danger mb-3">{error}</div>}
                <div className='mb-3'>
                  <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {loading? <button className='btn btn-info d-block mx-auto' disabled>Loging...</button> :<button className='btn btn-info d-block mx-auto'>Login</button>}
                </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login
