import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SwiperSlide } from 'swiper/react';
import { faArrowPointer, faBookOpen, faCartShopping, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from './Carousel';
import { CardBenefits } from './Cards/CardBenefits';


const breakpoints = {
    1200: {
        slidesPerView: 1,
        spaceBetween: 1
    },
}

const colors = [
    '#000315',
    '#f41052',
    '#0ae57f',
    '#5911f2',
    '#b008ae',
];

export const Benefits = () => {
    const { t } = useTranslation();
    const swiperRef = useRef();
    const [currentColors, setCurrentColors] = useState(new Array(5).fill('#8E9295'));

    useEffect(() => {
        changeColor(0);
    }, []);

    const slideTo = (index) => {
        swiperRef.current.slideTo(index);
        changeColor(index);
    }

    const changeColor = (index) => {
        const newCurrentColors = currentColors.map((_, i) => index === i ? colors[index] : '#8E9295');
        setCurrentColors(newCurrentColors);
    }
    const onSlideChange = (swiper) => changeColor(swiper.activeIndex);


    return (
        <div className='benefits'>
            <div className='benefits__screen'>
            </div>
            <div className='benefits__content'>
                <div className='benefits__icons'>
                    <FontAwesomeIcon style={{ color: currentColors[0] }} className='benefits__icon benefits__icon--first' icon={faBookOpen} onClick={() => slideTo(0)} />
                    <FontAwesomeIcon style={{ color: currentColors[1] }} className='benefits__icon' icon={faCartShopping} onClick={() => slideTo(1)} />
                    <FontAwesomeIcon style={{ color: currentColors[2] }} className='benefits__icon' icon={faEye} onClick={() => slideTo(2)} />
                    <FontAwesomeIcon style={{ color: currentColors[3] }} className='benefits__icon' icon={faUser} onClick={() => slideTo(3)} />
                    <FontAwesomeIcon style={{ color: currentColors[4] }} className='benefits__icon' icon={faArrowPointer} onClick={() => slideTo(4)} />
                </div>
                <div className='benefits__tabs'>
                    <Carousel
                        breakpoints={breakpoints}
                        hasPagination={false}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={onSlideChange}
                    >
                        {
                            t('SoftwareDevelopmentServices', { returnObjects: true }).map(({ Title, Text }, i) => {
                                return <SwiperSlide> <CardBenefits colorTitle={colors[i]} title={Title} text={Text} /> </SwiperSlide>
                            })

                        }
                    </Carousel>
                </div>

            </div>
        </div>
    )
}
