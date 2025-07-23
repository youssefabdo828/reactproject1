import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarr from '../navbar/Navbar.jsx';
import Sitefooter1 from './../Sitefooter/Sitefooter';

export default function Layout() {
  return (
    <>
    <Navbarr/>

<Outlet/>

    <Sitefooter1/>
    </>
  )
}
