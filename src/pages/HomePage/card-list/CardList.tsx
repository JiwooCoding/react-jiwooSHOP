import { useEffect } from 'react'
import { useAppSelector, useAppdispatch } from '../../../hooks/redux'
import styles from './CardList.module.scss';
import { fetchProducts } from '../../../store/products/products.slice';
import CardItem from './card-item/CardItem';
import CardSkeleton from '../card-skeleton/CardSkeleton';

const CardList = () => {

    const dispatch = useAppdispatch();
    //(state => state.productsSlice) : redux가 가진 여러 slice 중에서 productsSlice를 선택하라는 의미
    const {products, isLoading} = useAppSelector(state => state.productsSlice);
    const category = useAppSelector(state => state.CategoriesSlice);
    
    useEffect(() => {
      dispatch(fetchProducts(category?.toLowerCase()));
    }, [category])
    

  if(isLoading) return <CardSkeleton/>;
  return (
    <ul className={styles.card_list}>
        {products.map(product => <CardItem key={product.id} item={product} />)}
    </ul>
  )
}

export default CardList