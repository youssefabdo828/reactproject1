import React from 'react'
import Sitefooter1 from '../sitefooter/sitefooter'
import { Outlet } from 'react-router-dom'
import Navbarr from '../navbar/Navbar.jsx';

export default function Layout() {
  return (
    <>
    <Navbarr/>

<Outlet/>

    <Sitefooter1/>
    </>
  )
}
