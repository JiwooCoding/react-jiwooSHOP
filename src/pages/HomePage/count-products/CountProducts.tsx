import { useAppSelector } from '../../../hooks/redux'
import styles from './CountProducts.module.scss';

const CountProducts = () => {

    const {products, isLoading} = useAppSelector(state => state.productsSlice)

  return (
    <div className={styles.count_products}>
        {!isLoading &&(
            <p>
                전체 상품 {products.length}개
            </p>
        )}
    </div>
  )
}

export default CountProducts