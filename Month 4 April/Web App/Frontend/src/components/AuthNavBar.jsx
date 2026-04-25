import React from 'react'

const AuthNavBar = () => {

  const token = localStorage.getItem("token")


  return (
    <div>

      {
        token ? (

        <div className="d-flex bg-light">
        <div className='mx-5'>
            <h3>LOGO</h3>
        </div>
        <div className='mx-5'>
            <h3> <a href='/dashboard'>Dashboard</a></h3>
        </div>
        <div className='mx-5'>
            <h3> <a href='/item'>Items</a></h3>
        </div>
        
      </div>

        ):( ""
      )}


      
    </div>
  )
}

export default AuthNavBar
