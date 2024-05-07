import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardBrand } from './Cards/CardBrand';
import { useTranslation } from 'react-i18next';
import { Pagination, Autoplay } from 'swiper/modules';

const TripleSlider = () => {
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  const updateSlideContent = () => {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => {
      const cardBrandImg = slide.firstChild.children[0].firstChild;
      const cardBrandContent = slide.firstChild.children[1];
      if (slide.className.includes('swiper-slide-prev') || slide.className.includes('swiper-slide-next')) {
        cardBrandImg.classList.add('card-brand__img--blur');
        cardBrandContent.classList.add('card-brand__content--hidden');
      } else {
        cardBrandImg.classList.remove('card-brand__img--blur');
        cardBrandContent.classList.remove('card-brand__content--hidden');
      }
    });
  };

  useEffect(() => {
    updateSlideContent();
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on('slideChangeTransitionEnd', updateSlideContent);

    return () => {
      swiperInstance.off('slideChangeTransitionEnd', updateSlideContent);
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: false }}
      autoplay
    >
      {t('CardBrands', { returnObjects: true }).map(({ Title, Text }) => (
        <SwiperSlide key={Title}>
          <CardBrand title={Title} text={Text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TripleSlider;
