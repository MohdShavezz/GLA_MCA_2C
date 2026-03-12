import React, { useRef } from 'react'

const UncontrollForm = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)

    function handleClick(e){
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        nameRef.current.value=''
    }

    return (
        <form>
            <input ref={nameRef} type="text" name="name" placeholder='name' />
            <input ref={emailRef} type="text" name="email" placeholder='email' />
            <button onClick={handleClick}>submit</button>
        </form>
    )
}

export default UncontrollForm
