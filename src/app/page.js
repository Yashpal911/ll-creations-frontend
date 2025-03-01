"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { Card } from 'rsuite';

const data = [
  {
    img: "/Images/img1.jpg",
    heading: "LOGO DESIGN",
    description:
      "We transform ideas into stunning logos that capture your brand’s essence. Stand out with a design that speaks for you.",
    joined: "January 2023",
  },
  {
    img: "/Images/img1.jpg",
    heading: "POSTER DESIGN",
    description:
      "We transform ideas into stunning logos that capture your brand’s essence. Stand out with a design that speaks for you.",
    joined: "March 2022",
  },
  {
    img: "/Images/img1.jpg",
    heading: "POSTER DESIGN",
    description:
      "We transform ideas into stunning logos that capture your brand’s essence. Stand out with a design that speaks for you.",
    joined: "March 2022",
  },
  {
    img: "/Images/img1.jpg",
    heading: "POSTER DESIGN",
    description:
      "We transform ideas into stunning logos that capture your brand’s essence. Stand out with a design that speaks for you.",
    joined: "March 2022",
  },
];

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
          scrollbar={{
            hide: true,
          }}
          navigation={true}
          modules={[Autoplay, Scrollbar, Navigation]}
          className="mySwiper h-[85vh]"
        >
          <SwiperSlide>
            <img src='/Images/img1.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/Images/img2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/Images/img3.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/Images/img4.jpg' />
          </SwiperSlide>
        </Swiper>

        <section className='p-24 flex justify-center items-center'>
          <div className="w-[50%] text-center">
            <h1>About</h1>
            <p className="aboutsubheading">
              Welcome to my digital playground, where creativity meets functionality! As a UI/UX designer, I specialize in building visually compelling and user-friendly interfaces that enhance engagement and elevate brands. With a deep understanding of user psychology, wireframing, and prototyping, I transform ideas into pixel-perfect designs.
            </p>
          </div>
        </section>

        <section className='p-5 bg-[#f1f1f1] serviceSection'>
          <h1 className='text-center mb-4'>Our Services</h1>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            effect={'fade'}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper w-3/4"
            onSwiper={(swiper) => {
              const swiperElement = swiper.el;

              swiperElement.addEventListener("mouseenter", () => {
                swiper.autoplay.stop(); // Stop autoplay on hover
              });

              swiperElement.addEventListener("mouseleave", () => {
                swiper.autoplay.start(); // Resume autoplay when hover is removed
              });
            }}
          >
            {data.map((data, index) => (
              <SwiperSlide key={index}>
                <Card className="serviceCard mb-10">
                  <Card.Body className='p-0'>
                    <div className='w-full'>
                      <img src={data.img} className='serviceImg' />
                    </div>
                    <h5 className='mt-6 px-3 serviceHeading font-extrabold'>{data.heading}</h5>
                    <p className='text-gray-400 mt-4 px-3 text-base line-clamp-4'>
                      {data.description}
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <a className="px-3 text-end cursor-pointer">Read More</a>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
}
