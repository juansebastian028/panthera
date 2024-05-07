import React from 'react'
import { CardMemberTeam } from './Cards/CardMemberTeam'
import Carousel from './Carousel'
import { SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next';

const team = [
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
    {
        name: "Juan Sebastián Vargas",
        role: "Software Developer Jr.",
        img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    },
];

const breakpoints = {
    1200: {
      slidesPerView: 6,
      spaceBetween: 1
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 1
    },
}

export const OurTeam = () => {

    const { t } = useTranslation();
    return (
        <div>
            <div className='our-team'>
                <h2 className='our-team__title'>{t("OurTeam.Title")}</h2>
                <p className='our-team__text'>{t("OurTeam.Text")}</p>
            </div>
            <Carousel breakpoints={breakpoints} hasPagination={true}>
                {
                    team.map(({name, role, img}) => {
                        return <SwiperSlide>
                            <CardMemberTeam name={name} role={role} img={img} />
                        </SwiperSlide>
                    })

                }
            </Carousel>
        </div>
    )
}
