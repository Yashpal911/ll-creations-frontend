"use client";

// pages/about.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules and CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';

export default function About() {
    // Data for offer cards
    const offerItems = [
        {
            title: "Poster Design",
            description: "Eye-catching posters that effectively communicate your message",
            icon: "🖼️",
            bgColor: "bg-blue-50"
        },
        {
            title: "Social Media Post",
            description: "Engaging content designed to boost your social media presence",
            icon: "📱",
            bgColor: "bg-blue-50"
        },
        {
            title: "Logo Design",
            description: "Distinctive brand identities that make your business memorable",
            icon: "✏️",
            bgColor: "bg-purple-50"
        },
        {
            title: "Business Card Design",
            description: "Professional cards that make a lasting impression",
            icon: "📇",
            bgColor: "bg-blue-50"
        },
        {
            title: "Visiting Card",
            description: "Elegant personal cards that represent you with style",
            icon: "🪪",
            bgColor: "bg-purple-50"
        },
        {
            title: "Photo Editing",
            description: "Professional retouching to enhance and perfect your images",
            icon: "📸",
            bgColor: "bg-blue-50"
        }
    ];

    // Data for why choose us section
    const chooseUsItems = [
        {
            title: "Creative Expertise",
            description: "Our team blends artistic vision with precision craftsmanship.",
            icon: "🎨",
            color: "border-l-purple-400"
        },
        {
            title: "Personalized Consultation",
            description: "We collaborate closely to deliver tailored designs.",
            icon: "💬",
            color: "border-l-blue-400"
        },
        {
            title: "Wide Range of Customizations",
            description: "Ensure your product matches your vision perfectly.",
            icon: "🛠️",
            color: "border-l-blue-400"
        },
        {
            title: "Eco-Friendly Materials",
            description: "Using environmentally conscious materials and processes.",
            icon: "🌱",
            color: "border-l-green-400"
        },
        {
            title: "Affordable Luxury",
            description: "High-end customized designs at competitive prices.",
            icon: "💎",
            color: "border-l-indigo-400"
        },
        {
            title: "Unmatched Support",
            description: "Guiding you from concept to completion.",
            icon: "🤝",
            color: "border-l-purple-400"
        }
    ];

    // Data for team members
    const teamMembers = [
        {
            name: "Team Member 1",
            role: "Founder & Designer",
            bio: "Passionate about creating beautiful and meaningful pieces that bring joy to our customers.",
            accentColor: "from-purple-400 to-blue-400"
        },
        {
            name: "Team Member 2",
            role: "Lead Artisan",
            bio: "Passionate about creating beautiful and meaningful pieces that bring joy to our customers.",
            accentColor: "from-blue-400 to-indigo-400"
        },
        {
            name: "Team Member 3",
            role: "Customer Relations",
            bio: "Passionate about creating beautiful and meaningful pieces that bring joy to our customers.",
            accentColor: "from-green-400 to-teal-400"
        }
    ];

    return (
        <>
            <Head>
                <title>About Us | LL Creations</title>
                <meta name="description" content="Learn about LL Creations - creators of premium customized LED neon signs, cake toppers, and personalized gifts" />
                <meta property="og:title" content="About Us | LL Creations" />
                <meta property="og:description" content="Premium customized LED neon signs, cake toppers, and personalized gifts" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://ll-creations.com/about" />
            </Head>

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-purple-50 via-white to-blue-50 pt-20 pb-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-300 blur-3xl"></div>
                        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-blue-300 blur-3xl"></div>
                        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-200 blur-3xl"></div>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <p className="!leading-normal text-4xl md:text-5xl font-bold mb-6 text-black text-center">
                            Bringing <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">imagination</span> to life, <br /> 
                            With designs that tell <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">your story</span>.
                        </p>
                    </div>
                </div>

                {/* Our Story Section */}
                <section className="py-16 px-4 relative">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-black relative inline-block">
                            Our Story
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative z-10">
                                <div className="absolute -z-10 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-30 -top-10 -left-10"></div>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    What started as a small idea soon became a journey fueled by creativity and passion. <br />
                                    At <strong className="relative">
                                        <span className="relative z-10">LL Creation</span>
                                        <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 -z-10"></span>
                                    </strong>, we believe that great design tells a story: one that inspires, connects, and leaves a lasting impact. <br /><br />

                                    From logos to social media designs, we transform ideas into visuals that speak louder than words. <br />
                                    Each project we create reflects dedication, precision, and a deep understanding of your vision. <br /><br />

                                    <strong className="relative inline-block">
                                        <span className="relative z-10">Your ideas, our creativity — together, we create something extraordinary.</span>
                                        {/* <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-200 -z-10"></span> */}
                                    </strong>
                                </p>
                            </div>
                         <div className="rounded-lg overflow-hidden shadow-lg h-full relative">
                                        <div className="bg-gray-200 w-full h-full min-h-64 relative">
                                          <Image
                                            src="/Images/about-bg.jpg"
                                            width={500}
                                            height={500}
                                            alt='img'
                                            className='rounded-3xl w-full h-full object-cover'
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

                {/* What We Offer Section */}
                <section className="py-16 px-4 relative overflow-hidden">
                    <div className="absolute -z-10 top-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute -z-10 bottom-20 left-0 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-black relative inline-block">
                            What We Offer
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        </h2>
                        <div className="w-full">
                            <Swiper
                                modules={[Autoplay, EffectCards]}
                                spaceBetween={40}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                                className="pb-16"
                            >
                                {offerItems.map((item, index) => (
                                    <SwiperSlide key={index} className="py-4 px-3">
                                        <div className={`${item.bgColor} rounded-xl p-8 h-full flex flex-col items-center text-center relative overflow-visible shadow-md transition-all duration-300 group hover:shadow-xl hover:-translate-y-1`}>
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/50 rounded-full -mt-6 -mr-6 blur-xl"></div>
                                            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-6 text-3xl group-hover:scale-110 transition-all duration-300 shadow-md">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 text-black">{item.title}</h3>
                                            <p className="text-lg text-gray-600 line-clamp-2">{item.description}</p>
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-2 border-gray-300"></div>
                                            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-gray-200"></div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 opacity-70"></div>
                    <div className="max-w-5xl mx-auto relative z-10">
                        <h2 className="text-3xl font-bold mb-8 text-center text-black relative inline-block mx-auto">
                            Why Choose LL Creations
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {chooseUsItems.map((item, index) => (
                                <div key={index} className={`flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${item.color} relative overflow-hidden group`}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-1 text-black">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                    <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-transparent border-r-gray-100"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                {/* <section className="py-16 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-50/50"></div>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-4xl font-bold mb-8 text-black text-center relative inline-block">
                            Meet the Team
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-teal-400"></div>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 text-center">
                            Behind LL Creations is a team of passionate artisans who love what they do, combining traditional craftsmanship with modern design.
                        </p>

                        <div className="grid md:grid-cols-3 gap-10">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 m-1 group relative">
                                    <div className={`h-64 relative bg-gradient-to-br ${member.accentColor}`}>
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                            Team Member Photo
                                        </div>
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                                    </div>
                                    <div className="p-6 relative">
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-white text-2xl">
                                            {["👨‍🎨", "👩‍🎨", "👨‍💼"][index]}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-1 text-black text-center pt-6">{member.name}</h3>
                                        <p className="text-lg text-gray-600 mb-4 text-center">{member.role}</p>
                                        <p className="text-lg text-gray-700">{member.bio}</p>
                                    </div>
                                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white"></div>
                                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white"></div>
                                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gray-200"></div>
                                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    );
}