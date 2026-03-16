import React, { useContext } from 'react'
import Child from './Child'
import { UserContext } from './UserContex'

const Parent = () => {
  const userData= useContext(UserContext)
  // console.log('parent',userData)
  return (
    <div>
      Parent
  <p>Username: {userData.name}</p>
      <Child/>
    </div>
  )
}

export default Parent
