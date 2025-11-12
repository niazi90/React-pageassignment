import React from 'react'
import './card.css'
const Card = ({image,title,heading,price,percentage}) => {
  return (
    <div className='cardparent'>
      <div >
        <img src={image} alt={title}/>
        </div>
       <div> <h4 className='cradheading'>{heading}</h4>
        <h1>{price}</h1>
        <h4 className='percentage'>{percentage}</h4></div>
      </div>
   
  )
}

export default Card
