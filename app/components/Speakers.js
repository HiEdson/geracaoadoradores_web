"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import NextImage from "next/image";
import localFont from 'next/font/local'

import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import style from './css/speakersCard.module.css'

import { Autoplay, Pagination } from 'swiper/modules';


const myFont = localFont({
    src: '../../public/Abigail.ttf',
    display: 'swap',
})

export const Speakers = ({data}) => {

    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) { // Adjust this value based on your breakpoint for small screens
                setSlidesPerView(2);
            } else {
                setSlidesPerView(4);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call handleResize initially to set the initial slidesPerView

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Swiper
                // slidesPerView={4}
                ref={swiperRef}
                slidesPerView={slidesPerView}
                loop={true}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // freeMode={true}
                pagination={{
                    clickable: true,
                    type: 'bullets'
                }}
                // autoplay={{ delay: 1000 }}
                modules={[Autoplay]}
                className={`mySwiper `}
            >
                {data.map(item => (
                    <SwiperSlide key={item.key} className={`py-3 px-2 ${style.swiper_slideC}`}>
                        <Card className="w-full">
                            <CardBody className=" py-2">
                                <Image
                                    style={{
                                        opacity: "100 !important",
                                        // background: "red !important",
                                        // Add other styles as needed
                                        height: "30vh !important",
                                        width: "100% !important"
                                    }}
                                    as={NextImage}
                                    alt="Card background"
                                    className=" rounded-xl inset-0 object-cover"
                                    src={item.image}
                                    width={270}
                                    height={180} // Adjust the height as needed
                                    
                                />
                                <div className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className={`text-tiny uppercase font-bold tracking-widest text-[1.11rem] ${myFont.className}`}>{item.name}</p>
                                    <small className="text-default-500">{item.title}</small>
                                </div>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
