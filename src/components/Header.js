import React from 'react'
import '../index.css'
import avater from '../images/usa2.jpg'

function Header() {
  return (
    <div className='infor-rapper'>
      <div className="infor-content">
        <img src={avater} alt="" className='avater' />
        <div className="infor-text">
            <h2>Usama .A. Sani</h2>
            <h4>frontend developer</h4>
            <small>Nigeria</small>
        </div>
      </div>
    </div>
  )
}

export default Header
