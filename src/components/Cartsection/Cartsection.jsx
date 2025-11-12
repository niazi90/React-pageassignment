import React from 'react'
import './cartsection.css'
const Cartsection = ({image,heading,title}) => {
  return (
    <div className='cartsection'>
      <div>
        <img src={image} alt={title} />
        <h3 className='heading'>{heading}</h3>
      </div>
      
    </div>
  )
}

export default Cartsection
