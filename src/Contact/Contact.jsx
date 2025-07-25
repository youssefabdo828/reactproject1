import React, { useEffect, useState } from 'react'
import './Contact.css';

export default function Contact() {

    const lable = document.querySelectorAll('label');

  const [name,setname] = useState(null);
  function changelable (name , index) {
if(name){

  lable[index].classList.remove('top')
}else{
  lable[index].classList.add('top')
}
  }
const [age,setage] = useState(null);
const [email,setemail] = useState(null);
const [password,setepassword] = useState(null);
  return (
    <>
    <div className='contact' id='contact'>
     <div className='header-text text-center pt-4'>
<h2 className='text-uppercase mb-3 fs-1 fw-bolder'>conatct section</h2>
<div className='d-flex align-items-center justify-content-center mb-3'>
<div className='line me-3 '></div>
<i className='fa-solid fa-star'></i>
<div className='line ms-3 '></div>
</div>
  </div>


  <form action="" className='w-50 p-3 mx-auto mt-5  '>
    <div>
<label htmlFor="username" className=' position-relative top'>userName :</label>
<input value={name} onChange={(e) => {setname(e.target.value); changelable(e.target.value , 0) }} type="text" id='username' placeholder='userName' name='userName' className=' form-floating-input form-control border-0 border-bottom py-3 position-relative' />
    </div>

<div>
<label htmlFor="userage" className=' position-relative top'>userAge :</label>
<input value={age} onChange={(e) => {setage(e.target.value); changelable(e.target.value , 1) }} type="number" id='userage' placeholder='userAge' name='userAge' className=' form-floating-input form-control border-0 border-bottom py-3 position-relative' />
</div>

<div>
<label htmlFor="useremail" className=' position-relative top'>userEmail :</label>
<input value={email} onChange={(e) => {setemail(e.target.value); changelable(e.target.value , 2) }} type="email" id='useremail' placeholder='userEmail' name='userEmail' className=' form-floating-input form-control border-0 border-bottom py-3 position-relative' />
</div>

<div>
<label htmlFor="userpassword" className=' position-relative top'>userPassword :</label>
<input value={password} onChange={(e) => {setepassword(e.target.value); changelable(e.target.value , 3) }} type="password" id='userpassword' placeholder='userPassword' name='userPassword' className=' form-floating-input form-control border-0 border-bottom py-3 position-relative' />
</div>

<button class="btn mt-4 text-white" > send Message </button>

  </form>
  </div>
    </>
  )
}
