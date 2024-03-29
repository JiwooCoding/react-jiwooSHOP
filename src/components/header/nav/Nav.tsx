import { Link } from 'react-router-dom'
import {FiLogIn, FiShoppingCart, FiUser} from 'react-icons/fi';
import {GoSignOut} from 'react-icons/go'
import styles from './Nav.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import { useAppSelector, useAppdispatch } from '../../../hooks/redux';
import { removeUserId } from '../../../store/cart/cart.slice';
import {removeUser} from '../../../store/user/user.slice';
import {getAuth, signOut} from 'firebase/auth';
import app from '../../../firebase';
import NavCaryBlock from './nav-cart-block/NavCaryBlock';

const Nav = () => {

    const {isAuth} = useAuth();
    const dispatch = useAppdispatch();
    const auth = getAuth(app);
    const {products} = useAppSelector((state) => state.cartSlice);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                dispatch(removeUserId());
            })
            .catch((error) => {
                console.error(error);
            })
    }

  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <div className={styles.counter}>
                    <Link to={"/cart"}>
                        {" "}
                        <FiShoppingCart/>
                    </Link>
                    {products.length > 0 && <b>{products.length}</b>}
                    {products.length > 0 && 
                        <div className={styles.nav_hover_cart}>
                            <NavCaryBlock/>
                        </div>
                    }
                </div>
            </li>
            <li>
                <div className={styles.counter}>
                    <Link to={"/order"}>
                        {" "}
                        <FiUser title="주문"/>
                    </Link>
                </div>
            </li>
            <li>
                {isAuth ? 
                (<GoSignOut 
                    onClick={handleSignOut} 
                    className={styles.nav_sign_out} 
                    title='로그아웃'/>) 
                : 
                (<Link to={"/login"}>
                    <FiLogIn title='로그인'/>
                </Link>) }
            </li>
        </ul>
    </nav>
  )
}

export default Nav