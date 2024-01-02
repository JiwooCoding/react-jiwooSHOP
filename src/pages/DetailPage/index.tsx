import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchProduct } from '../../store/products/product.slice';
import { useAppSelector, useAppdispatch } from '../../hooks/redux';
import styles from './DetailPage.module.scss';
import Loader from '../../components/loader/Loader';
import { addToCart } from '../../store/cart/cart.slice';

const DetailPage = () => {
  const {id} = useParams();
  const productID = Number(id);
  const dispatch = useAppdispatch();

  const {product, isLoading} = useAppSelector((state) => state.productSlice);
  const {products} = useAppSelector((state) => state.cartSlice);
  //some()은 어떤 요소라도 주어진 조건 만족하면 true반환한다.
  const productMatching = products.some((productItem) => productItem.id === product.id);

  useEffect(() => {
    dispatch(fetchProduct(productID))
  }, [productID])
  
  const addItemToCart = () => {
    dispatch(addToCart(product));
  }

  return (
    <div className='page'>
      {isLoading ? (<Loader/>) :
      <div className={styles.card_wrapper}>
        <div className={styles.card_img}>
          <img
            src={product.image}
            alt='product card'
          />
        </div>
        <div className={styles.card_description}>
          <h3>{product.category}</h3>
          <h1>{product.title}</h1>
          <h4>$ {product.price}</h4>
          <p>{product.description}</p>
          <div>
            <button
              disabled={productMatching}
              //productMatching이 false일 때 addItemToCart()실행
              onClick={() => !productMatching && addItemToCart()}
            >
              {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
            </button>
            <Link to={"/cart"}>장바구니로 이동</Link>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default DetailPage