import React from 'react'
import Header from '../Header'
import LoginGlassmorphism from './login'

const page = () => {
  return (
   <>
   <div className="flex flex-col h-screen">
   <Header />
   <LoginGlassmorphism />
    </div>
   </>
  )
}

export default page