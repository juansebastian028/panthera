import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <FontAwesomeIcon className='swiper-btn-prev' onClick={() => swiper.slidePrev()} icon={faCircleArrowLeft} />
      <FontAwesomeIcon className='swiper-btn-next' onClick={() => swiper.slideNext()} icon={faCircleArrowRight}/>
    </>
  );
};