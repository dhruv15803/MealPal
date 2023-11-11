import React from 'react'
import logo from '../images/MealPal-logo.png'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
    <nav id="navbar">
        <div id="navLeft">
            <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <ul className="nav-links">
            <Link to='/'><div><li>All</li></div></Link>
            <Link to='/breakfast'><div><li>Breakfast</li></div></Link>
            <Link to='/lunch'><div><li>Lunch</li></div></Link>
            <Link to='/shakes'><div><li>Shakes</li></div></Link>
        </ul>

        <div id="navRight">
            <Link to='/Order'><button className="navBtn">Your order ({props.noOfItems})</button></Link>
        </div>

    </nav>
    </>
  )
}

export default Navbar