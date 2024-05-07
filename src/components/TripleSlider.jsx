import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardBrand } from './Cards/CardBrand';
import { useTranslation } from 'react-i18next';
import { Pagination, Autoplay } from 'swiper/modules';

const TripleSlider = () => {
    const swiperRef = useRef(null);
    const { t } = useTranslation();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.activeIndex);
    };

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
        swiperInstance.on('slideChange', handleSlideChange);

        return () => {
            swiperInstance.off('slideChange', handleSlideChange);
        };
    }, []);

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            ref={swiperRef}
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={true}
            pagination={{ clickable: false }}
            autoplay
        >
            {t('CardBrands', { returnObjects: true }).map(({ Title, Text }, index) => (
                <SwiperSlide key={Title}>
                    <CardBrand
                        title={Title}
                        text={Text}
                        isActive={index !== currentSlideIndex}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TripleSlider;
