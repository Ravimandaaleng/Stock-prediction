import React,{useEffect} from 'react'
import axios from 'axios'
import axiosinstance from '../../axiosinstance'

const Dashboard = () => {

  useEffect(() => {
    const fetchProtectedData =async () => {
        try {
            const response = await axiosinstance.get('/protected-view/') 
            console.log('Protected data:', response.data)
        }catch(error){
            console.error('Error fetching protected data:', error)
        }}
        fetchProtectedData()
    },[])
  return (
    <div className='text-center container text-light'>
      Dashbord
    </div>
  )
}

export default Dashboard

