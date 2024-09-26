import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBlog } from "react-icons/fa6";

const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const [ isSticky, setIsSticky ] = useState(false)

  //toggle menu
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if(window.screenY > 100){
  //       setIsSticky(true);
  //     }
  //     else{
  //       setIsSticky(false);
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window,addEventListener("scroll", handleScroll);
  //   }
  // },[])

  const navItems = [
    {Link: "Home", path: "/"},
    {Link: "About", path: "/about"},
    {Link: "Shop", path: "/shop"},
    {Link: "Sell Your Book", path: "/admin/dashboard"},
    {Link: "Blog", path: "/blog"}
  ]
  return (
       <header>
        <nav>
          <div>
             <Link to= '/'>Books</Link>
          </div>
        </nav>
       </header>
  )
}

export default Navbar
