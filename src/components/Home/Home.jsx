/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Chefs from './Chefs';
import { Circles } from 'react-loader-spinner';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

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
          <img src='/public/image/5255.jpg' alt="Image 1" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/public/image/6682645.jpg' alt="Image 2" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/public/image/wepik-export-20230502033041.png' alt="Image 3" className="w-full h-[400px]" />
        </SwiperSlide>
      </Swiper>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
          <Circles color="#4fa94d" />
        </div>
      ) : (
        <Chefs />
      )}
    </>
  );
};

export default Home;



// import React from 'react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import Chefs from './Chefs';

// SwiperCore.use([Navigation, Pagination, Autoplay]);

// const Home = () => {
//   return (
//     <>
//       <Swiper
//         speed={1000}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src='/public/image/5255.jpg' alt="Image 1" className="w-full h-[400px]" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src='/public/image/6682645.jpg' alt="Image 2" className="w-full h-[400px]" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src='/public/image/wepik-export-20230502033041.png' alt="Image 3" className="w-full h-[400px]" />
//         </SwiperSlide>
//       </Swiper>
//       <Chefs />
//     </>
//   );
// };

// export default Home;



