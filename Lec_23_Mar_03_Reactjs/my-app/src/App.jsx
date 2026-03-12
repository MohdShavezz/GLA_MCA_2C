import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Form from './components/Form'
import UncontrollForm from './components/UncontrollForm'

const App = () => {
  return (
    <div>
      <Header/>
      <div>
        <h2>My React App</h2>
        {/* <p>hellaosd jflads</p> */}
        {/* width:5rem, bgcolor:yellow, radius:5px, content:'login' */}
        {/* <Button width={'5rem'} bgColor={'yellow'} radius={'0px'} btnContent={'Login'} /> 
        <Button width={'10rem'} bgColor={'red'} radius={'10px'} btnContent={'Submit'} />  */}

        {/* <Form/> */}
        <UncontrollForm/>

      </div>
      <Footer/>

    </div>
  )
}

export default App
