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
            src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            key: 1,
        },
        {
            src: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            key: 2,
        },
        {
            src: 'https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            key: 3,
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
                style={{ width: '100%', height: '98%' }}
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
                        <img src={item.src} alt={`Slide ${item.key}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselCard;
