import React,{useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleRegister =  async (e) => {
        e.preventDefault()
        setLoading(true)
       const userData = { 
        username, email, password
    }
    try {
        const response= await axios.post('http://localhost:8000/api/v1/register/', userData)
        console.log('Response:', response.data)
        console.log('User registered successfully')
        setError({});
        setSuccess(true)
    } catch (error) {
      setError(error.response.data)
        console.error(error.response.data)
    }finally{
        setLoading(false)
    }
}
  return (
    <>
    <div className='text-light container'>
      <div className='row justify-content-center '>
        <div className='col-md-6 bg-light-dark p-5 rounded'>
            <h3 className='text-light text-center'>Create an Account</h3>
            <form onSubmit={handleRegister}>
              <div className='mb-3'>
                 <input type="text" className="form-control" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <small>{error.username && <div className="text-danger">{error.username}</div>}</small>
              </div>

                <div className='mb-3'>
                  <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <small>{error.email && <div className="text-danger">{error.email}</div>}</small>
                </div>

                <div className='mb-3'>
                  <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <small>{error.password && <div className="text-danger">{error.password}</div>}</small>
                </div>
                {success && <div className="text-success alert alert-success mb-3">Registration successful! You can now log in.</div>}
                {loading? <button className='btn btn-info d-block mx-auto' disabled>Registering...</button> :<button className='btn btn-info d-block mx-auto'>Register</button>}
                </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Register