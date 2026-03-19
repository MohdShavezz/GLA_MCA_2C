import React, { useCallback, useMemo, useState } from 'react'


const Parent = () => {
    const [count,setCount]=useState(1)
    const [num,setNum]=useState(10) //expensive
    const [isActive,setIsActive]=useState(true)

    // console.log('Parent mount..')

    function expensiveFn(){
        console.log('expensive Fn...')
        let sum=0
        for (let index = 0; index < 100000000; index++) {
            sum+=num
        }
        console.log(sum)
    }

    // useCallback(()=>{
    //     //api 
    //     console.log('useCallback run..')
    // },[])

    const res=useMemo(()=>{
        return expensiveFn() //1000
    },[num])


  return (
    <div>
        <p>Count: {count}</p> 
        <button onClick={()=>setCount(count+1)}>Count++</button>
        <p>Is Active: {isActive?'IsActive':'NotActive'}</p>
        <button onClick={()=>setIsActive(pre=>!pre)}>toggleActive</button>
        <p>Expesive value: {num}</p>
        <button onClick={()=>setNum(num+1)}>Num++</button>

    </div>
  )
}

export default Parent
