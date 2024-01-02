import {FC} from 'react'
import styles from './NavCartItem.module.scss';
import { Link } from 'react-router-dom';
import { useAppdispatch } from '../../../../../../hooks/redux';
import { deleteFromCart } from '../../../../../../store/cart/cart.slice';
import {AiOutlineDelete} from 'react-icons/ai';
import { IProduct } from '../../../../../../store/products/products.type';

type NavCartItemProps = {
    item: IProduct;
}

const NavCartItem: FC<NavCartItemProps> = ({item}) => {

    const dispatch = useAppdispatch();
    
    const deleteProduct = () => {
        dispatch(deleteFromCart(item.id))
    }

  return (
    <div className={styles.nav_cart_item}>
        <Link to={`/product/${item.id}`}>
            <img src={item.image} alt='product img'/>
        </Link>
        <div className={styles.nav_cart_description}>
            <h3>{item.category}</h3>
            <h2>{item.title}</h2>
            <span>{item.price} X {item.quantity} = $ {item.price}</span>
        </div>
        <button onClick={deleteProduct} className={styles.nav_cart_delete}>
            <AiOutlineDelete/>
        </button>
    </div>
  )
}

export default NavCartItem