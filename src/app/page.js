"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Home() {
  return (
    <>
    <div>
       <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[85vh]"
        >
        <SwiperSlide>
          <img src='/Images/img1.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/Images/img2.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/Images/img3.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/Images/img4.jpg'/>
        </SwiperSlide>
      </Swiper>
        </div>
    </>
  );
}
