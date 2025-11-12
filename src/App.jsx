
import './App.css'
import Cartsection from './components/Cartsection/Cartsection'
import Herosection from './components/Herosection/Herosection'
import Navbar from './components/Navbar/Navbar'
import images1 from './assets/cart1.png'
import images2 from './assets/cart2.png'
import images3 from './assets/cart3.png'

function App() {
  

  return (
    <>
      <Navbar />
      <Herosection />
      <br></br>
      <div className='cartse'>
 <Cartsection image={images1} heading={"improved collection performance"}/>
 <Cartsection image={images2} heading={"convenient,local payment option"}/>
<Cartsection image={images3} heading={"The best price guarantee"}/>  
      </div>
      
     
    </>
  )
}

export default App
