import React from 'react'

const Home = () => {
  return (
    <div>
         <div className='home-div'>
       {/* <span><img src="" alt="logo" /></span> */}
       <div className='btn-div'>
       <button className='btn-home'><Link to='/registre'>Sign Up</Link></button>
       <button className='btn-home'><Link to='login'>Login</Link></button>
       </div>
    </div>
    </div>
  )
}

export default Home