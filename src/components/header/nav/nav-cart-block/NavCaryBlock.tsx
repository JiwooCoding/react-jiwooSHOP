import { useEffect } from 'react'
import { useAppSelector, useAppdispatch } from '../../../../hooks/redux';
import {getTotalPrice} from '../../../../store/cart/cart.slice';
import styels from './NavCartBlock.module.scss';
import NavCartList from './nav-cart-list/NavCartList';
import { Link } from 'react-router-dom';

const NavCaryBlock = () => {

    const {totalPrice, products} = useAppSelector((state) => state.cartSlice);
    const dispatch = useAppdispatch();

    useEffect(() => {
      dispatch(getTotalPrice());
    }, [products])
    

  return (
    <div className={styels.nav_cart_block}>
        <NavCartList/>
        <div className={styels.nav_cart_price}>
            <p>합계: $ {totalPrice.toFixed(2)}</p>
        </div>
        <div className={styels.nav_cart_link}>
            <Link to={"/cart"}>장바구니 이동</Link>
        </div>
    </div>
  )
}

export default NavCaryBlock