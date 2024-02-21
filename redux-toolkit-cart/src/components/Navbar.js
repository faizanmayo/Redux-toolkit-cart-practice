import React from 'react'
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {ItemsAmount} = useSelector((state)=> state.cart)
  return (
    <nav>
    <div className='nav-center'>
      <h3>redux toolkit Cart Practice</h3>
      <div className='nav-container'>
        <CartIcon />
        <div className='amount-container'>
          <p className='total-amount'>{ItemsAmount}</p>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
