"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { Card } from 'rsuite';
import Image from 'next/image';

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
  let swiperInstance = null;

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


        <section className='p-24 flex justify-between'>
          <div className="w-1/2">
            <h1>About Company Name</h1>
            <p className="aboutsubheading">
              Welcome to my digital playground, where creativity meets functionality! As a UI/UX designer, I specialize in building visually compelling and user-friendly interfaces that enhance engagement and elevate brands. With a deep understanding of user psychology, wireframing, and prototyping, I transform ideas into pixel-perfect designs.
            </p>
            <button className='theme-btn mt-10'>More About Company</button>
          </div>
          <div className='w-2/5 relative'>
          <span>
            <Image src="/Images/about-bg.jpg" width={500} height={500} alt='img' className='rounded-3xl'/>
          </span>
          <span className='absolute -top-10 p-3 right-0 bg-gray-200 rounded-xl shadow-lg moveAnimation'>
            <Image src="/Images/about-bg.jpg" width={150} height={150} alt='img' className='rounded-xl'/>
          </span>
          
          </div>
        </section>


        <section className='p-5 bg-[#f1f1f1] serviceSection'>
          <h1 className='text-center mb-4'>Our Services</h1>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper w-4/5"
            onSwiper={(swiper) => {
              swiperInstance = swiper;
            }}
            onMouseEnter={() => {
              if (swiperInstance && swiperInstance.autoplay) {
                swiperInstance.autoplay.stop(); // Stop autoplay on hover
              }
            }}
            onMouseLeave={() => {
              if (swiperInstance && swiperInstance.autoplay) {
                swiperInstance.autoplay.start(); // Resume autoplay when mouse leaves
              }
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

        {/* Clients */}
        <section className='px-24 py-10 flex justify-evenly'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-bold'>Customers</p>
            <div className='h-32 w-32 bg-gray-400 rounded-full my-3 flex justify-center items-center'>
            <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60}/>
            </div>
            <p className='text-3xl font-extrabold'>1232</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-bold'>Customers</p>
            <div className='h-32 w-32 bg-gray-400 rounded-full my-3 flex justify-center items-center'>
            <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60}/>
            </div>
            <p className='text-3xl font-extrabold'>1232</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-bold'>Customers</p>
            <div className='h-32 w-32 bg-gray-400 rounded-full my-3 flex justify-center items-center'>
            <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60}/>
            </div>
            <p className='text-3xl font-extrabold'>1232</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-bold'>Customers</p>
            <div className='h-32 w-32 bg-gray-400 rounded-full my-3 flex justify-center items-center'>
            <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60}/>
            </div>
            <p className='text-3xl font-extrabold'>1232</p>
          </div>
        </section>
      </div>
    </>
  );
}
