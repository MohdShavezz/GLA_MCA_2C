import React from 'react'

const Button = (props) => {
    
    const {width, bgColor, radius, btnContent}=props;
    console.log(props)
  return (
    <div style={{width:width,backgroundColor:bgColor,borderRadius:radius,textAlign:'center',padding:'.3rem'}}>
        {btnContent}
    </div>
  )
}

export default Button
