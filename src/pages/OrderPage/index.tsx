import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom';
import OrdersList from './order-list/OrdersList';

const OrderPage = () => {

  const {isAuth} = useAuth();
  if(!isAuth) return <Navigate to={"/"}/>

  return (
    <div className='page'>
      <div className='container'>
        <h2>주문/배송 조회</h2>
          <OrdersList/>
      </div>
    </div>
  )
}

export default OrderPage