import React from 'react'
import '../Components/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navItems'>
        
            <h1 className='logo'>Dolce</h1>
        
        
            <ul className='navMenu'>
                <li>
                    <Link className='navLinks' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='navLinks' to='/recipes'>Recipes</Link>
                </li>
                <li>
                    <Link className='navLinks' to='/aboutUs'>AboutUs</Link>
                </li>
                <li>
                    <Link className='navLinks' to='/careers'>Careers</Link>
                </li>
            </ul>
        
        
        <input 
            className='searchBox'
            placeholder='Find reciPIE'
        />


        
    </div>
  )
}

export default Navbar