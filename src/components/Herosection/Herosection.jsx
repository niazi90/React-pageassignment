import React from 'react'
import './Herosection.css'
import Card from './crad'
import imagewom from '../../assets/women-removebg-preview.png'
import myimage from '../../assets/totalearning.png'
import myimage1 from '../../assets/total.png'
import myimage2 from '../../assets/totalproject.png'
const Herosection = () => {
  return (
    <div className='parenthero'>
      <div>
        
        <h1 className='heroheading'>ALL banks are worried about fintech ind. </h1>
     <p className='para'>we help you get paid any way you want,with the least amount of hassle.it's just one of the reasons we are the most trusted name.</p>
    <input  className ='business_email' type="text" placeholder='Business email' />
      <button className='getbtn'>Get started</button>
      <div className='cardp'>
      <Card  image={myimage}   heading={"Total Earning"}price={"$22k"}percentage={"+10.80"}/>
       <Card  image={myimage1} heading={"Withdraw"}price={"$10k"}percentage={"+05.80"}/>
      <Card  image={myimage2} heading={"Total project"}price={"$15"}percentage={"+10.80"}/> 
      </div>
      </div>
{    
      <div className='pimagecircle'>
         <div className='parentcircle'>
        <div className='circleblue'></div>
        <div className='circleyellow'></div>
      </div>
        <img  className='imagewomen' src={imagewom} alt="ijo" />
      <div className='imagecircle'></div>
      </div> }
     
    </div>
  )
}

export default Herosection
