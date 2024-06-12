import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'


const Welcome = () => {
  const {user} = useSelector((state) => state.auth)

  return (
    <div>
      {user ? (
        <span>
          <Header/>
        </span>       
      ): (
        <span> 
          <img src="src/assets/Logo-tuktuk-sinverano.png" alt="logo-tuktuk" />
        </span>
      )}
    </div>
  )
}

export default Welcome