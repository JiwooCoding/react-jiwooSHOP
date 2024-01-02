import React from 'react'
import { useAppSelector } from '../../../../../hooks/redux'
import styels from './NavCartList.module.scss';
import NavCartItem from './nav-cart-item/NavCartItem';

const NavCartList = () => {

    const {products} = useAppSelector((state) => state.cartSlice);


  return (
    <div className={styels.nav_Cart_list}>
        {products.map((item) => (
            <NavCartItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default NavCartList