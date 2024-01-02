// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import styles from './slidePage.module.scss'


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function slidePage() {
  return (
    <div className={styles.page_container}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{delay:5000}}
        pagination={{
          type: 'progressbar',
        }}
        loop={true}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="home_banner"
      >
        <SwiperSlide>
        <div className={styles.slideContent}>
            <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/black-friday-ecommerce-luxury-visual-with-space-for-text-free-photo.jpg?w=2210&quality=70" />
            <div className={styles.textOverlay}>
              <h1>신년행사 갑진년 기념 값진 할인행사!</h1>
              <h2>1/1 ~ 1/14 (단 2주간)</h2>
              <p>최대 90% 할인</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/sunset-over-the-croatian-sea-free-photo.jpg?w=2210&quality=70" />
          <div className={styles.textOverlay2}>
            <h1>2024년 새해 복 많이 받으세요</h1>
            <h3>2023년 한 해 동안 지우SHOP을 사랑해주신 많은 고객님들께 감사의 말씀드립니다</h3>  
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/black-friday-ecommerce-luxury-visual-with-space-for-text-free-photo.jpg?w=2210&quality=70" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/black-friday-ecommerce-luxury-visual-with-space-for-text-free-photo.jpg?w=2210&quality=70" />
        </SwiperSlide> */}
        {/* 커스텀 화살표 */}
        <div className={`swiper-button-next ${styles.customNextArrow}`} />
        <div className={`swiper-button-prev ${styles.customPrevArrow}`} />
      </Swiper>
    </div>
  );
}
