import { useEffect } from 'react'
import { useAppSelector, useAppdispatch } from '../../../hooks/redux'
import {getTotalPrice, postOrder} from '../../../store/cart/cart.slice';
import styles from './CheckOut.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const CheckOut = () => {
    const dispatch = useAppdispatch();
    const cart = useAppSelector((state) => state.cartSlice);
    const {isAuth} = useAuth();

    const sendOrder = () => {
        dispatch(postOrder(cart))
    }

    useEffect(() => {
      dispatch(getTotalPrice())
    }, [cart]) 
    //cart데이터가 변할 때마다 다시 계산할 수 있도록 종속성배열에 [cart]
    

  return (
    <div className={styles.checkout}>
        <div>
            <p>
                {" "}
                <span>총 결제예상금액 </span> $ {cart.totalPrice.toFixed(2)}
            </p>
            {/* isAuth가 true면 계산하기 보여주고 false면 로그인 버튼 보여준다. */}
            {isAuth ?
                (<button 
                    className={styles.checkout_button}
                    onClick={() => sendOrder()}
                >
                   계산하기
                </button>) : 
                (<Link to={"/login"} className={styles.checkout_button}>
                    로그인
                </Link>)
            }
        </div>
    </div>
  )
}

export default CheckOut