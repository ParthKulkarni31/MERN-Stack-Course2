import React from 'react'

const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem("token")

  if(token){
    return children
  } else{
    <navigate to = "/" replace />
  }

}

export default ProtectedRoute
