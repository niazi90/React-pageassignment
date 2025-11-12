import React from 'react'
import './Cartsections.css'
const Cartsection = ({image,heading,title}) => {
  return (
    <div >
      <div className='cartsection'>
        <img src={image} alt={title} />
        <h3 className='heading'>{heading}</h3>
      </div>
      
    </div>
  )
}

export default Cartsection
