"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './css/landing.module.css'; // Ensure this path is correct
import {Pagination, Navigation } from 'swiper/modules';

const CarouselCard = () => {
    const items = [
        {
            src: '/slides/slide.jpg',
            key: 0,
        },
        {
            src: '/slides/slide1.jpg',
            key: 1,
        },
        {
            src: '/slides/slide2.jpg',
            key: 2,
        },
        {
            src: '/slides/slide3.jpg',
            key: 3,
        },
        {
            src: '/slides/slide4.jpg',
            key: 4,
        },
        {
            src: '/slides/slide5.jpg',
            key: 5,
        },

       
    ];

    return (
        <div className="flex justify-center w-full h-screen">
            <Swiper
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={`mySwiper ${style.swiperContainer}`} // Add custom class from CSS module
                style={{ width: '100%', height: '90%' }}
            >
                {items.map((item) => (
                    <SwiperSlide
                        key={item.key}
                        style={{
                            textAlign: 'center',
                            fontSize: '18px',
                            background: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        className={style.swiperImg}
                    >
                        <img src={item.src} alt={`Slide ${item.key}`} style={{ objectFit: "fill" }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselCard;
