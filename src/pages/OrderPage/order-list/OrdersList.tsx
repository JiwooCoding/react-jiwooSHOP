import React, { useEffect } from 'react'
import {useAuth} from '../../../hooks/useAuth';
import { useAppSelector, useAppdispatch } from '../../../hooks/redux';
import { fetchOrder } from '../../../store/order/order.slice';
import CartEmpty from '../../../components/cart-empty/CartEmpty';
import styles from './OrdersList.module.scss';
import OrderItem from '../order-item/OrderItem';

const OrdersList = () => {

  const {id} = useAuth();
  const {order} = useAppSelector((state) => state.orderSlice);
  const dispatch = useAppdispatch();

  useEffect(() => {
    //이 유저가 주문한 것만 가지고 올 수 있음
    dispatch(fetchOrder(id))
  }, [id])


  if(!order.length){
    return <CartEmpty title="주문 내역"/>
  }
  
  return (
    <div className={styles.orders}>
      {order.map((item) => (
        <div key={item.id}>
          <div className={styles.order_header}>
            <h4>주문번호_{item.id}</h4>
            <p>합계: $ {item.totalPrice.toFixed(2)}</p>
          </div>
          <ul className={styles.orders_list}>
            {item.products.map((order) => (
              <OrderItem key={order.id} order={order}/>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default OrdersList