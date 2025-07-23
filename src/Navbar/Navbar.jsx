import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import Home from './../Home/Home';

export default function Navbarr() {

const [navscroll,setNavScroll] = useState(false);

useEffect(() => {
  const navscrolled = document.querySelector('.navbar');

  function handlescroll(){
    if (window.scrollY >= 98){
      setNavScroll(true);
      navscrolled.classList.remove('py-4');
    }else{
setNavScroll(false);
      navscrolled.classList.add('py-4')
    }
  }
  window.addEventListener('scroll' , handlescroll);
  return () => {
    window.removeEventListener('scroll' , handlescroll);
  }
},[]);









  return (
    <nav className= 'navbar navbar-expand-lg fixed-top py-4'>
  <div className="container">
    <NavLink className="navbar-brand text-white bg-transparent fs-2 text-uppercase fw-bolder" to={''}>Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white me-3 rounded-3 text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page" to={'about'}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white me-3 rounded-3 text-uppercase fw-bold mt-3 mt-md-0 px-2" to={'Portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white me-3 rounded-3 text-uppercase fw-bold mt-3 mt-md-0 px-2" to={'Contact'}>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
