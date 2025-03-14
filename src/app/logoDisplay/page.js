"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const LogoDesignGallery = () => {
  // Sample logo designs data - Replace with your actual data
  const logoDesigns = [
    {
      id: 1,
      title: "Quantum Technology",
      image: "/Images/img1.jpg",
      client: "Quantum Tech Inc."
    },
    {
      id: 2,
      title: "Evergreen Organic Foods",
      image: "/Images/img1.jpg",
      client: "Evergreen Organics"
    },
    {
      id: 3,
      title: "Atlas Fitness",
      image: "/Images/img1.jpg",
      client: "Atlas Fitness Club"
    },
    {
      id: 4,
      title: "Luxe Interiors",
      image: "/Images/img1.jpg",
      client: "Luxe Interiors & Co."
    },
    {
      id: 5,
      title: "WaveStream",
      image:"/Images/img1.jpg",
      client: "WaveStream Media"
    },
    {
      id: 6,
      title: "Nature's Bloom",
      image: "/Images/img1.jpg",
      client: "Nature's Bloom Skincare"
    },
    {
      id: 7,
      title: "Velocity Motors",
      image:"/Images/img1.jpg",
      client: "Velocity Motors"
    },
    {
      id: 8,
      title: "Moonlight Studios",
      image: "/Images/img1.jpg",
      client: "Moonlight Studios"
    },
    {
      id: 9,
      title: "Breeze Apparel",
      image:"/Images/img1.jpg",
      client: "Breeze Apparel Co."
    },
    {
      id: 10,
      title: "Fusion Finance",
      image: "/Images/img1.jpg",
      client: "Fusion Financial Group"
    },
    {
      id: 11,
      title: "Aqua Wellness",
      image:"/Images/img1.jpg",
      client: "Aqua Wellness Center"
    },
    {
      id: 12,
      title: "Pixel Perfect",
      image: "/Images/img1.jpg",
      client: "Pixel Perfect Design"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)`,
                 backgroundSize: '40px 40px',
               }}>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-3xl"></div>
          
          <div className="absolute right-0 top-1/4 w-full h-64 opacity-10"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%238B5CF6' fill-opacity='1' d='M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,90.7C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                 backgroundSize: 'cover',
                 transform: 'scaleY(0.5)',
               }}>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-100/20 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Logo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Design</span> Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Distinctive brand identities crafted with precision and creativity, each logo tells a unique story and captures the essence of the brand it represents.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logoDesigns.map(logo => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <img
                    src={logo.image}
                    alt={logo.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-medium text-lg">{logo.title}</h3>
                      <p className="text-white/80 text-sm">{logo.client}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoDesignGallery;