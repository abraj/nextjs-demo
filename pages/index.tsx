import Swiper, { Navigation, Pagination } from 'swiper';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';

function Slider() {
  const swiper = useRef<any>(null);

  useEffect(() => {
    swiper.current = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });    
  }, []);

  const handlePrev = () => {
    if (swiper.current) swiper.current.slidePrev();
  };

  const handleNext = () => {
    if (swiper.current) swiper.current.slideNext();
  };

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide swiper-css1">Slide 1</div>
        <div className="swiper-slide swiper-css1">Slide 2</div>
        <div className="swiper-slide swiper-css1">Slide 3</div>
      </div>
      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev" onClick={handlePrev}></div>
      <div className="swiper-button-next" onClick={handleNext}></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Next.js Demo</h2>
      <Slider />
    </div>
  )
}

export default Home
