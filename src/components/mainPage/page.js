"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
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

export default function HomePageComponent({ HomeData }) {
  let swiperInstance = null;

  return (
    <>
      <div>
        {/* Improved Banner with Overlay Text and CTA Buttons */}
        <div className="relative">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            scrollbar={{
              hide: true,
            }}
            navigation={true}
            modules={[Autoplay, Scrollbar, Navigation]}
            className="mySwiper h-[85vh]"
          >
            {HomeData.length === 0 ? (
              <SwiperSlide className="relative">
                <p>No data found.</p>
              </SwiperSlide>
            ) : (
              HomeData.map((item, index) => (
                <SwiperSlide key={item.id ?? index} className="relative">
                  <img src={item.img} className="object-cover h-full w-full" alt={`Slide ${index + 1}`} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>


        <section className="py-16 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-8 text-black relative inline-block">
                  About LL-Creations
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
                </h2>
                <div className="absolute -z-10 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-30 -top-10 -left-10"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  We specialize in creative design services, offering unique logos, engaging intro videos, professional cards, posters, and social media promotions. Our expertise extends to crafting customized marriage cards, letterheads, and festival offer designs that suit your style and purpose. Whether you're building a brand, promoting a business, or celebrating special moments, we deliver impactful visuals that leave a lasting impression.
                  <Link href="/about" className='hover:no-underline' >
                    <button
                      className="mt-5 relative flex items-center gap-2 font-semibold text-[20px] text-black transition-all group group-hover:font-bold"
                    >
                      <p className="relative group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent">
                        More about us
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-black transition-all duration-300 group-hover:text-blue-400 group-hover:scale-125 group-hover:stroke-[3px]"
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
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-full relative">
                <div className="bg-gray-200 w-full h-full min-h-64 relative">
                  <Image
                    src="/Images/ copy.jpg"
                    width={500}
                    height={500}
                    alt='img'
                    className='rounded-3xl w-full h-full object-cover'
                    unoptimized
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
                  <div className="absolute -bottom-6 -right-6 w-[20%] h-[20%] bg-blue-300 rounded-full opacity-30 blur-xl"></div>
                </div>

                <div className="absolute -bottom-2 -left-2 w-[15%] h-[15%] border-4 border-purple-300"></div>
                <div className="absolute -top-2 -right-2 w-[15%] h-[15%] border-4 border-blue-300"></div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section (removed hover effects and View All button) */}
        <section className="pt-16 px-2 relative overflow-hidden">
          <div className="absolute -z-10 top-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -z-10 bottom-20 left-0 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-black relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </h2>
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
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
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {data.map((data, index) => (
                <SwiperSlide key={index}>
                  <Card className="serviceCard mb-10">
                    <Card.Body className='p-3'>
                      <div className='overflow-hidden rounded-t-[20px]'>
                        <img src={data.img} className='serviceImg' />
                      </div>
                      <Link href="/displayPage" className='hover:no-underline'><h5 className='mt-6 px-3 serviceHeading font-extrabold text-lg'>{data.heading}</h5></Link>
                      <p className='text-gray-400 mt-4 px-3 text-base line-clamp-3'>
                        {data.description}
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href="/displayPage" className='hover:no-underline' >
                        <button
                          className="relative flex items-center gap-2 mx-2 font-semibold text-base text-black transition-all group group-hover:font-bold"
                        >
                          <p className="relative group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent">
                            Read More
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-black transition-all duration-300 group-hover:text-blue-400 group-hover:scale-125 group-hover:stroke-[3px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                          <span
                            className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all group-hover:w-full"
                          ></span>
                        </button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>


        {/* Portfolio Stats */}
        <div className='px-5 lg:px-40'>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
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
        </div>
      </div>
    </>
  );
}