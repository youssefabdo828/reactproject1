import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
    <div className='about d-flex justify-content-center align-items-center flex-column'>
<div>
  <div className='text-center pt-4 text-white'>
<h2 className='text-uppercase mb-3 fs-1 fw-bolder'>about component</h2>
<div className='d-flex align-items-center justify-content-center mb-3'>
<div className='line me-3 bg-white'></div>
<i className='fa-solid fa-star'></i>
<div className='line ms-3 bg-white'></div>
</div>
  </div>
  </div>
<div className="container">
  <div className=" row d-flex justify-content-center align-items-center px-5">
    <div className='col-md-5 ps-md-5 text-white'>
<p>
  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
</p>
    </div>
    <div className='col-md-5 pe-5 text-white'>
      <p>
         Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
      </p>
    </div>
  </div>
    </div>
    </div>
    </>
  );
}
