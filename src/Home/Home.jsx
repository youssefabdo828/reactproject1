import React from 'react';
import './Home.css';
import logo from '../assets/imges/avataaars.svg'

export default function Home() {
  return (
    <>
    <div className='home d-flex justify-content-center align-items-center text-white'>
      <div className='text-center'>
<img src={logo} className='mb-3 img-fluid' alt="logo" />
<div>
  <div className='text-center pt-4 text-white'>
<h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
<div className='d-flex align-items-center justify-content-center mb-3'>
<div className='line me-3 bg-white'></div>
<i className='fa-solid fa-star'></i>
<div className='line ms-3 bg-white'></div>
</div>
  </div>
</div>
<div _ngcontent-jdt-c17="">Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
    </>
  )
}

