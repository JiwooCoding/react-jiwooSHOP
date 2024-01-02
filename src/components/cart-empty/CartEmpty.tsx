import {FC} from 'react'
import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';
import error from '../../assets/free-icon-error-message-3272506.png'

type CartEmptyProps = {
  title: string;
}

const CartEmpty: FC<CartEmptyProps> = ({title}) => {
  return (
    <div className={styles.cart_empty}>
      <img src={error}/>
      <h3>{title}가 비어있습니다.</h3>
      <Link to={"/"}>쇼핑하러 가기</Link>
    </div>
  )
}

export default CartEmpty