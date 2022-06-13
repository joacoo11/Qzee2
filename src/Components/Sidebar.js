import React from 'react'
import '../App.css';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <h2 className='h2-aside'><img className='logo-aside' src='./img/qzee.png' alt=''/>Owners</h2>

     <ul className='ul-aside'>
        <li className='li-aside'><img src='./img/nav-1.png' alt=''/>Overview<img className='selector1' src='./img/nav-selector.png' alt=''/></li>
        <li className='li-aside'><img src='./img/nav-2.png' alt=''/>Tables<img className='selector2' src='./img/nav-selector.png' alt=''/></li>
        <li className='li-aside'><img src='./img/nav-3.png' alt=''/>Bookings<img className='selector3' src='./img/nav-selector.png' alt=''/></li>
        <li className='li-aside'><img src='./img/nav-4.png' alt=''/>Queue<img className='selector4' src='./img/nav-selector.png' alt=''/></li>
        <li className='li-aside'><img src='./img/nav-5.png' alt=''/>Staff<img className='selector5' src='./img/nav-selector.png' alt=''/></li>
        <li className='li-aside'><img src='./img/nav-6.png' alt=''/>Settings<img className='selector6' src='./img/nav-selector.png' alt=''/></li>
      </ul>
    </div>
  )
}

export default Sidebar
