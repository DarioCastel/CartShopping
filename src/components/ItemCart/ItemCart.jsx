import React from 'react'
import './itemCart.scss'
import Sandia from '../../img/watermelon.jpg'

const ItemCart = () => {
  return (
    <div className='Card'>
        <div className='imgBox'><img src={Sandia} alt="SANDIA" /></div>
        <button>add</button>
        <div className="conteiner">
            <div className="detalles">
                sandia 300pe
            </div>
        </div>
    </div>
  )
}

export default ItemCart