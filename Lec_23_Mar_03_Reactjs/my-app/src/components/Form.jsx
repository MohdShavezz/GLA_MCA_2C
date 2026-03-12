import React, { useEffect, useState } from 'react'
import './form.css'

const Form = () => {

    // const [name,setName]=useState('')
    // const [email,setEmail]=useState('')
    const [formData,setFormData]=useState({name:'',email:''})

    function handleChange(e){
        const {name,value}=e.target
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(formData)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        const {name,email}=formData;
        if(name==''||email==''){
            console.log('data required..')
            return
        }
        console.log(name,email)
        setFormData({name:'',email:''})
    }

    function handleSubmitUsingFormData(e){
        e.preventDefault()
        const data=new FormData(e.target)
        // console.log(data.get('name'))
        // console.log(data.get('email'))
        const formObject = Object.fromEntries(data.entries());
        console.log(formObject)
        e.target.reset()
    }

  return (
    <div style={{marginTop:'1rem'}}>
      <form onSubmit={handleSubmitUsingFormData}>
        <h3>Fill Details:</h3>
        {/* <input type="text" name="name" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> */}
        {/* <input type="text" name="name" placeholder='name' onChange={handleChange}/>
        <input type="text" name="email" placeholder='email' onChange={handleChange}/> */}
        <input type="text" name="name" placeholder='name'/>
        <input type="text" name="email" placeholder='email'/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Form
