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
import { NumberTicker } from '@/components/magicui/number-ticker';

const data = [
  {
    img: "/Images/img1.jpg",
    heading: "POSTER DESIGN",
    description:
"    We create impactful posters that grab attention and deliver your message effectively. Whether for events, promotions, or branding, our designs are tailored to captivate your audience and leave a lasting impression. Stand out with posters that speak for you.",    joined: "January 2023",
  },
  {
    img: "/Images/img1.jpg",
    heading: "SOCIAL MEDIA POSTS",
    description:
      "Boost your online presence with eye-catching social media post designs. We create visuals that grab attention and engage your audience effectively.",
    joined: "March 2022",
  },
  {
    img: "/Images/img1.jpg",
    heading: "LOGO DESIGN",
    description:
    "We craft unique and memorable logos that define your brand’s identity. Our designs combine creativity and strategy to ensure your logo stands out and leaves a lasting impression.",
  },
  {
    img: "/Images/img1.jpg",
    heading: "BUSINESS CARD DESIGN",
    description:
      "Leave a lasting impression with sleek, professional business card designs that represent your brand with style.",
  },
  {
    img: "/Images/img1.jpg",
    heading: "VISITING CARDS",
    description:
      "Make a strong first impression with professionally designed visiting cards. Sleek, stylish, and tailored to your brand, our designs leave a mark wherever you go.",
  },
  {
    img: "/Images/img1.jpg",
    heading: "PHOTO EDITING",
    description:
      "Transform your photos with expert editing that enhances quality and style. From color correction to creative effects, we bring your images to life.",
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
            <h1>About LL-Creations</h1>
            <p className="aboutsubheading">
              We specialize in creative design services, offering unique logos, engaging intro videos, professional cards, posters, and social media promotions. Our expertise extends to crafting customized marriage cards, letterheads, and festival offer designs that suit your style and purpose. Whether you're building a brand, promoting a business, or celebrating special moments, we deliver impactful visuals that leave a lasting impression.
            </p>
            <button
              className="mt-5 relative flex items-center gap-2 font-semibold text-[20px] text-gray-900 transition-all hover:text-red-500 group"
            >
              <p className="relative">
                More about us
                <span
                  className="absolute inset-0 w-0 overflow-hidden text-red-500 transition-all group-hover:w-full"
                ></span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-900 transition-transform stroke-[3] group-hover:translate-x-1 group-hover:text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path

                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              <span
                className="absolute bottom-[-7px] left-0 h-[2px] w-0 bg-red-500 transition-all group-hover:w-full"
              ></span>
            </button>
          </div>
          <div className='w-2/5 relative'>
            <span>
              <Image src="/Images/about-bg.jpg" width={500} height={500} alt='img' className='rounded-3xl' />
            </span>
            <span className='absolute -top-10 p-3 right-0 bg-gray-200 rounded-xl shadow-lg moveAnimation'>
              <Image src="/Images/about-bg.jpg" width={150} height={150} alt='img' className='rounded-xl' />
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
                    <p className='text-gray-400 mt-4 px-3 text-base line-clamp-3'>
                      {data.description}
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <a className="px-3 cursor-pointer ">Read More</a>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Clients */}
        <section className='px-24 py-10 flex justify-evenly'>

          <div className='flex flex-col items-center justify-center group'>
            <div className='h-32 w-32 bg-gray-400 rounded-full my-3 flex justify-center items-center '>
              <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60} className='transition-transform duration-300 group-hover:scale-x-[-1]' />
            </div>
            <p className='text-3xl font-bold mb-3'>Finished Projects</p>
            <NumberTicker
              value={1234}
              className="whitespace-pre-wrap text-3xl font-bold tracking-normal text-black dark:text-white"
            />
          </div>
          <div className='flex flex-col items-center justify-center group'>
            <div className='h-32 w-32 bg-gray-400 rounded-full my-3 flex justify-center items-center '>
              <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60} className='transition-transform duration-300 group-hover:scale-x-[-1]' />
            </div>
            <p className='text-3xl font-bold mb-3'>Satisfied Clients</p>
            <NumberTicker
              value={1234}
              className="whitespace-pre-wrap text-3xl font-bold tracking-normal text-black dark:text-white"
            />
          </div>
          {/* <div className='flex flex-col items-center justify-center group'>
            <p className='text-3xl font-bold'>Positive Reviews </p>
            <div className='h-32 w-32 bg-gray-400 rounded-full my-3 flex justify-center items-center '>
              <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60} className='transition-transform duration-300 group-hover:scale-x-[-1]' />
            </div>
            <NumberTicker
              value={1234}
              className="whitespace-pre-wrap text-3xl font-bold tracking-normal text-black dark:text-white"
            />
          </div> */}
          <div className='flex flex-col items-center justify-center group'>
            <div className='h-32 w-32 bg-gray-400 rounded-full my-3 flex justify-center items-center '>
              <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60} className='transition-transform duration-300 group-hover:scale-x-[-1]' />
            </div>
            <p className='text-3xl font-bold mb-3'>Trusted Feedback</p>
            <NumberTicker
              value={1234}
              className="whitespace-pre-wrap text-3xl font-bold tracking-normal text-black dark:text-white"
            />
          </div>

        </section>
      </div>
    </>
  );
}
