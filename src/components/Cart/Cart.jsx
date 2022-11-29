import React from 'react'
import ItemCart from '../ItemCart/ItemCart'
import NavBar from '../NavBar/NavBar'
import './cart.scss'

const Cart = () => {
  return (
    <div className='divMain'>
      <NavBar/>
      <div className="containerCart grid-response">
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
      </div>
        Cozo
    </div>
  )
}

export default Cart