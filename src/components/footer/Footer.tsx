
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.info}>
          <h5>@지우SHOP</h5>
            <div className={styles.detail_info}>
              <p>채지우</p>
              <p>ekdlslove1@naver.com</p>
              <p>010-5553-8215</p>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer