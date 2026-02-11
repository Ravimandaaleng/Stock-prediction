import { useState } from 'react'
import './assets/Css/style.css'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/Dashboard/dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoutes from './PublicRoutes'

function App() {
  return(
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
          <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
