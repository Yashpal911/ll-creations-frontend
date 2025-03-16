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
import Link from 'next/link';


const data = [
  {
    img: "/Images/img1.jpg",
    heading: "POSTER DESIGN",
    description:
      "    We create impactful posters that grab attention and deliver your message effectively. Whether for events, promotions, or branding, our designs are tailored to captivate your audience and leave a lasting impression. Stand out with posters that speak for you.", joined: "January 2023",
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
      "We craft unique and memorable logos that define your brand's identity. Our designs combine creativity and strategy to ensure your logo stands out and leaves a lasting impression.",
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

const clientLogos = [
  { name: "Client 1", logo: "/Images/img1.jpg" },
  { name: "Client 2", logo: "/Images/img1.jpg" },
  { name: "Client 3", logo: "/Images/img1.jpg" },
  { name: "Client 4", logo: "/Images/img1.jpg" },
  { name: "Client 5", logo: "/Images/img1.jpg" },
];

const BannerImages = [
  '/Images/img1.jpg',
  '/Images/img2.jpg',
  '/Images/img3.jpg',
  '/Images/img4.jpg'
];

export default function Home() {
  let swiperInstance = null;

  return (
    <>
      <div>
        {/* Improved Banner with Overlay Text and CTA Buttons */}
        <div className="relative">
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
            {BannerImages.map((src, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
                <img src={src} className="object-cover h-full w-full" alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <section className='p-24 flex justify-between'>
          <div className="w-1/2">
            <span className='relative inline-block'>
              <h1>About LL-Creations</h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            </span>
            <p className="aboutsubheading">
              We specialize in creative design services, offering unique logos, engaging intro videos, professional cards, posters, and social media promotions. Our expertise extends to crafting customized marriage cards, letterheads, and festival offer designs that suit your style and purpose. Whether you're building a brand, promoting a business, or celebrating special moments, we deliver impactful visuals that leave a lasting impression.
            </p>
            <Link href="/about" className='hover:no-underline' > 
            <button
              className="mt-5 relative flex items-center gap-2 font-semibold text-[20px] text-black transition-all group group-hover:font-bold"
              >
              <p className="relative group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent">
                More about us
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-black transition-all duration-300 group-hover:text-blue-400 group-hover:scale-125"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
              <span
                className="absolute bottom-[-7px] left-0 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all group-hover:w-full"
                ></span>
            </button>
                </Link>

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

        {/* Services Section (removed hover effects and View All button) */}
        <section className='p-5 pt-14 bg-[#f1f1f1] serviceSection'>
          <div className='ms-20 mb-14'>
            <span className='relative inline-block'>
              <h1>Our Services</h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            </span>
          </div>
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
            className="mySwiper w-5/6"
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
                    <a className="px-3 cursor-pointer" href='/logoDisplay'>Read More</a>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-28 my-20">
          {[
            { number: "120", label: "Projects Completed", suffix: "+" },
            { number: "98", label: "Client Satisfaction", suffix: "%" },
            { number: "15", label: "Years Experience", suffix: "+" },
            { number: "40", label: "Brands Worked With", suffix: "+" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl custom-shadow p-6 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] hover:bg-gradient-to-b hover:from-white hover:to-blue-50 cursor-pointer"
            >
              <div className="transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  <NumberTicker
                    value={stat.number}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                  />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">{stat.suffix}</span>
                </h3>
                <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover:text-blue-700">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Statistics Section */}
        {/* <section className='py-16 px-24 bg-gradient-to-r from-gray-100 to-white'>
          <div className='text-center mb-14'>
            <span className='relative inline-block'>
              <h1>Our Impact</h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            </span>
          </div>
          <div className='flex justify-evenly'>
            <div className='flex flex-col items-center justify-center group'>
              <div className='h-32 w-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full my-3 flex justify-center items-center shadow-lg transform transition-transform duration-500 group-hover:scale-110'>
                <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60} className='transition-transform duration-300 group-hover:scale-x-[-1]' />
              </div>
              <p className='text-3xl font-bold mb-3'>Finished Projects</p>
              <NumberTicker
                value={1234}
                className="whitespace-pre-wrap text-3xl font-bold tracking-normal text-black dark:text-white"
              />
            </div>
            <div className='flex flex-col items-center justify-center group'>
              <div className='h-32 w-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full my-3 flex justify-center items-center shadow-lg transform transition-transform duration-500 group-hover:scale-110'>
                <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60} className='transition-transform duration-300 group-hover:scale-x-[-1]' />
              </div>
              <p className='text-3xl font-bold mb-3'>Satisfied Clients</p>
              <NumberTicker
                value={1234}
                className="whitespace-pre-wrap text-3xl font-bold tracking-normal text-black dark:text-white"
              />
            </div>
            <div className='flex flex-col items-center justify-center group'>
              <div className='h-32 w-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full my-3 flex justify-center items-center shadow-lg transform transition-transform duration-500 group-hover:scale-110'>
                <Image src={"/Icons/costumer.png"} alt='Customer' height={60} width={60} className='transition-transform duration-300 group-hover:scale-x-[-1]' />
              </div>
              <p className='text-3xl font-bold mb-3'>Trusted Feedback</p>
              <NumberTicker
                value={1234}
                className="whitespace-pre-wrap text-3xl font-bold tracking-normal text-black dark:text-white"
              />
            </div>
          </div>
        </section> */}


        {/* Client Logos Section */}
        {/* <section className='py-16 px-24'>
          <h1 className='text-center mb-12'>Our Clients</h1>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {clientLogos.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-32 p-4 bg-white rounded-lg shadow-md">
                  <img src={client.logo} alt={client.name} className="max-h-24 object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section> */}
      </div>
    </>
  );
}