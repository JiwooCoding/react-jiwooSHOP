import React, {FC} from 'react'
import { useAppdispatch } from '../../../../hooks/redux'
import { decrementProduct, deleteFromCart, incrementProduct } from '../../../../store/cart/cart.slice';
import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';
import {AiOutlineDelete} from 'react-icons/ai';
import { IProduct } from '../../../../store/products/products.type';

type CartItemProps = {
    product: IProduct;
}

const CartItem: FC<CartItemProps>= ({product}) => {

    const dispatch = useAppdispatch();

    const deleteProduct = () => {

        if(window.confirm('해당 상품을 삭제하시겠습니까?')){
            dispatch(deleteFromCart(product.id))
        }
    }

    const incrementCount = () => {
        dispatch(incrementProduct(product.id))
    }

    const decrementCount = () => {
        dispatch(decrementProduct(product.id))
    }

  return (
    <div className={styles.cart_item}>
        <Link to={`/product/${product.id}`}>
            <img src={product.image} alt='product card'/>
        </Link>
        <div className={styles.cart_description}>
            <h3>{product.category}</h3>
            <h2>{product.title}</h2>
            <span>
                {product.price} X {product.quantity} = $ {product.total.toFixed(2)}
            </span>
        </div>
        <div className={styles.cart_count}>
            <div>
                <button disabled={product.quantity === 1} onClick={decrementCount}>
                    -
                </button>
                <span>{product.quantity}</span>
                <button disabled={product.quantity === 10} onClick={incrementCount}>
                    +
                </button>
            </div>
        </div>
        <button onClick={deleteProduct} className={styles.cart_delete}>
            <AiOutlineDelete/>
        </button>
    </div>
  )
}

export default CartItem