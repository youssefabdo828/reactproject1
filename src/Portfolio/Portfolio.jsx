import React from 'react'
import './Portfolio.css';
import pic1 from '../assets/imges/poert1.png'
import pic2 from '../assets/imges/port2.png'
import pic3 from '../assets/imges/port3.png'

export default function Portfolio() {
  return (
    <>

    <div className='portfolio'>
  <div className='header-text text-center pt-4'>
<h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
<div className='d-flex align-items-center justify-content-center mb-3'>
<div className='line me-3 '></div>
<i className='fa-solid fa-star'></i>
<div className='line ms-3 '></div>
</div>
  </div>
<div className='container'>
  <div className="row g-5 ">
    <div className="col-lg-4 col-md-6">
      <div className='rounded-3 overflow-hidden position-relative'>
        <img src={pic1} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
<button data-bs-toggle="modal" data-bs-target="#modal-1" className='border-0 bg-transparent'>
  <i className='text-white fa-solid fa-plus fa-6x'></i>
  </button> 
            </div>
        </div>
      </div>
    <div className="col-lg-4 col-md-6">
      <div className='rounded-3 overflow-hidden position-relative'>
        <img src={pic2} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <button data-bs-toggle="modal" data-bs-target="#modal-2" className='border-0 bg-transparent'>
  <i className='text-white fa-solid fa-plus fa-6x'></i>
  </button> 
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className='rounded-3 overflow-hidden position-relative'>
        <img src={pic3} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>

          <button data-bs-toggle="modal" data-bs-target="#modal-3" className='border-0 bg-transparent'>
  <i className='text-white fa-solid fa-plus fa-6x'></i>
  </button> 
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className='rounded-3 overflow-hidden position-relative'>
        <img src={pic1} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <button data-bs-toggle="modal" data-bs-target="#modal-1" className='border-0 bg-transparent'>
  <i className='text-white fa-solid fa-plus fa-6x'></i>
  </button> 
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className='rounded-3 overflow-hidden position-relative'>
        <img src={pic2} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <button data-bs-toggle="modal" data-bs-target="#modal-2" className='border-0 bg-transparent'>
  <i className='text-white fa-solid fa-plus fa-6x'></i>
  </button> 
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className='rounded-3 overflow-hidden position-relative'>
        <img src={pic3} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <button data-bs-toggle="modal" data-bs-target="#modal-3" className='border-0 bg-transparent'>
  <i className='text-white fa-solid fa-plus fa-6x'></i>
  </button> 
        </div>
      </div>
    </div>
    </div>
  </div>



  <div className="modal fade" id="modal-1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content bg-transparent border-0">
      <div className="modal-body">
        <figure className='d-flex align-items-center justify-content-center'>
          <img src={pic1} className='img-fluid' alt="house" />
        </figure>
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="modal-2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content bg-transparent border-0">
      <div className="modal-body">
        <figure className='d-flex align-items-center justify-content-center'>
          <img src={pic2} className='img-fluid' alt="house" />
        </figure>
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="modal-3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content bg-transparent border-0">
      <div className="modal-body">
        <figure className='d-flex align-items-center justify-content-center'>
          <img src={pic3} className='img-fluid' alt="house" />
        </figure>
      </div>
    </div>
  </div>
</div>

  </div>
  </>
  )
}
