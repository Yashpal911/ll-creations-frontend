"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import Link from "next/link";
import { useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const swiperRefs = useRef([]);

  const workCategories = [
    {
      category: "Logo Design",
      description: "Distinctive brand identities crafted with precision and creativity.",
      items: [
        "/Images/img3.jpg",
        "/Images/img3.jpg",
        "/Images/img3.jpg",
        "/Images/img3.jpg",
        "/Images/img3.jpg",
        "/Images/img3.jpg",
      ],
      delay: 2000,
      slug: "logo-design"
    },
    {
      category: "Poster Design",
      description: "Eye-catching visuals that communicate messages with impact.",
      items: [
        "/Images/img2.jpg",
        "/Images/img2.jpg",
        "/Images/img2.jpg",
        "/Images/img2.jpg",
        "/Images/img2.jpg",
        "/Images/img2.jpg",
      ],
      delay: 3000,
      slug: "poster-design"
    },
    {
      category: "Social Media Post",
      description: "Engaging content designed to captivate and convert audiences.",
      items: [
        "/Images/img4.jpg",
        "/Images/img4.jpg",
        "/Images/img4.jpg",
        "/Images/img4.jpg",
        "/Images/img4.jpg",
        "/Images/img4.jpg",
      ],
      delay: 4000,
      slug: "social-media"
    },
    {
      category: "Photo Editing",
      description: "Transformative edits that elevate visual storytelling.",
      items: [
        "/Images/img1.jpg",
        "/Images/img1.jpg",
        "/Images/img1.jpg",
        "/Images/img1.jpg",
        "/Images/img1.jpg",
        "/Images/img1.jpg",
      ],
      delay: 5000,
      slug: "photo-editing"
    },
    {
      category: "Other",
      description: "Transformative edits that elevate visual storytelling.",
      items: [
        "/Images/img1.jpg",
        "/Images/img1.jpg",
        "/Images/img1.jpg",
        "/Images/img1.jpg",
        "/Images/img1.jpg",
        "/Images/img1.jpg",
      ],
      delay: 5000,
      slug: "other-designs"
    }
  ];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)`,
                 backgroundSize: '40px 40px',
               }}>
          </div>
        </div>
        
        {/* Abstract geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Large gradient circle */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-3xl"></div>
          
          {/* Flowing wave */}
          <div className="absolute right-0 top-1/4 w-full h-64 opacity-10"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%238B5CF6' fill-opacity='1' d='M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,90.7C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                 backgroundSize: 'cover',
                 transform: 'scaleY(0.5)',
               }}>
          </div>
          
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-100/20 to-transparent"></div>
          
          {/* Floating elements */}
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-purple-300/10 animate-pulse"
               style={{ animationDuration: '7s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-blue-300/10 animate-pulse"
               style={{ animationDuration: '5s' }}></div>
               
          {/* Subtle accent elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-blue-200/20 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-purple-200/20"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
        Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"> Vision</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Creativity</span>
        </h1>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-16 gap-4">
          {workCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${activeCategory === index
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="mb-16">
          <div className="text-center mb-8 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-3 text-gray-800">
              {workCategories[activeCategory].category}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {workCategories[activeCategory].description}
            </p>
          </div>

          <div className="w-full p-6 rounded-2xl backdrop-blur-sm bg-white/50 shadow-sm transition-all duration-500">
            <Swiper
              ref={el => swiperRefs.current[activeCategory] = el}
              modules={[Autoplay, EffectCoverflow, Navigation]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              loop={true}
              autoplay={{
                delay: workCategories[activeCategory].delay,
                disableOnInteraction: false
              }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
              }}
              className="pb-12"
            >
              {workCategories[activeCategory].items.map((imgSrc, index) => (
                <SwiperSlide key={index} className="py-4 px-3 transition-all duration-300">
                  <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-102 hover:brightness-105 shadow-lg">
                    <img
                      src={imgSrc}
                      alt={`${workCategories[activeCategory].category} - Project ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-bold">Project {index + 1}</h3>
                        <p className="text-sm">Click to view details</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* See More Button for active category */}
            <div className="flex justify-center mt-8">
              <Link href={`/logoDisplay`}>
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  <span>Explore All {workCategories[activeCategory].category}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
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

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .swiper-slide {
            transition: all 0.5s ease !important;
        }
        .swiper-slide-active {
            z-index: 10;
        }
        .swiper-slide-active img {
            transform: scale(1.05);
            transition: all 0.5s ease;
        }
        .swiper-pagination-bullet-active {
            background-color: #3b82f6 !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
            color: #3b82f6 !important;
        }
      `}</style>
    </section>
  );
}

export default Work;