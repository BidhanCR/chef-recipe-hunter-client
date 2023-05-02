/* eslint-disable no-unused-vars */
import React from 'react';
import image1 from '../../../public/image/5255.jpg';
import image2 from '../../../public/image/6682645.jpg';
import image3 from '../../../public/image/wepik-export-20230502033041.png';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Home = () => {
  return (
    <>
      <Swiper
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Image 1" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Image 2" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Image 3" className="w-full h-[400px]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;

