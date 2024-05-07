import { Swiper } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { useEffect, useRef, useState } from 'react';
import { SwiperNavButtons } from './SwiperNavButtons';

const Carousel = ({ children, breakpoints, hasNavigation = false, hasPagination = false, onSwiper, onSlideChange }) => {
  const [swiperParams, setSwiperParams] = useState({
    modules: [Navigation, Pagination, Autoplay],
    breakpoints: breakpoints,
    pagination: { clickable: true, enabled: hasPagination },
    autoplay: { enabled: true },
    onSwiper,
    onSlideChange,
  })

  return (
    <>
      <Swiper
        {...swiperParams}
      >
        {children}
        {
          hasNavigation &&
          <SwiperNavButtons />
        }
      </Swiper>
    </>
  );
};

export default Carousel;