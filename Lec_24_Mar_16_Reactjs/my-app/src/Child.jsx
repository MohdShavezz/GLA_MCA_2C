import React, { useContext } from 'react'
import { UserContext } from './UserContex'

const Child = () => {
  const userData= useContext(UserContext)
  const {setName}=userData
    // console.log('Child',userData)
  return (
    <div>
      Child
      <p>Username: {userData.name}</p>
      <button onClick={()=>setName('Tom')}>changeName</button>
    </div>
  )
}

export default Child
