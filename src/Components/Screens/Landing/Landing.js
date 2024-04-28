import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import { Box } from '@chakra-ui/react';
import Landing1 from '../../../assets/Landing.png'
import Landing2 from '../../../assets/Landing2.jpg'

export default function Landing() {
    return (
        <Box px="5%" py='1%'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <img src={Landing1} style={{ width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide><img src={Landing2} style={{ width: '100%' }} /></SwiperSlide>
                <SwiperSlide><img src={Landing1} style={{ width: '100%' }} /></SwiperSlide>
            </Swiper>
        </Box>
    );
}
