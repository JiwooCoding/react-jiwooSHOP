import React from 'react'
import {useAppSelector} from '../../../hooks/redux';
import styles from './CartList.module.scss';
import CartItem from './cart-item/CartItem';

const CartList = () => {

    const {products} = useAppSelector((state) => state.cartSlice);

  return (
    <div className={styles.cart_list}>
        {products.map((product) => (
            <CartItem key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default CartList