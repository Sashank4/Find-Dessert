import React from 'react'
import heroImg from '../Assets/bgImg.jpg'
import '../Pages/HomeStyles.css'
import Navbar from '../Components/Navbar'
import Trending from '../Components/trending'
import Inspired from '../Components/Inspired'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <>
    <Navbar/>

    <div className='Hero'>
        <img className='bgImg' alt='homeImg' src={heroImg}/>

        <div className='HeroText'>
            <h1>Welcome to DOLCE</h1>
            <p>Find the dessert to complete your meal</p>
        </div>

    </div>
    <Trending/>
    <Inspired/>
    <Footer/>
    </>
    
  )
}

export default Home