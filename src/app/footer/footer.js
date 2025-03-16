"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Footer = () => {
    const pathname = usePathname();
    const [currentYear, setCurrentYear] = useState(2025);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <>
            {/* CTA Section - Hidden on contact page */}
            {pathname !== "/contact" && (
                <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-black to-[#0A0D2D] text-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                            Ready to Create Something <span className="text-emerald-400">Amazing</span>?
                        </h2>
                        <p className="text-md md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed opacity-90">
                            Let's work together to bring your vision to life. Contact us today to discuss your ideas.
                        </p>
                        <Link href="/contact" className="hover:no-underline inline-block">
                            <button
                                className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group"
                                type="submit"
                            >
                                Let's Talk
                                <img src="/svg/contact.svg" className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-0 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 -rotate-45" alt="Contact icon" />
                            </button>
                        </Link>
                    </div>
                </section>
            )}

            {/* Main Footer */}
            <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white w-full">
                {/* Top Footer Content */}
                <div className="container mx-auto px-4 py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  lg:px-20 lg:gap-32" >
                        {/* Company Info */}
                        <div className="col-span-1 lg:col-span-1">
                            <div className="mb-6">
                                <Link href="/" className="block mb-4">
                                    <img src="/logo.svg" alt="LL Creations Logo" className="h-12" />
                                </Link>
                                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                                    Empowering your brand with creative designs from logos to social media promotions,
                                    we bring your vision to life!
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="#" className="transition-transform hover:scale-110">
                                    <span className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-brand-instagram">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                            <path d="M16.5 7.5v.01" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="transition-transform hover:scale-110">
                                    <span className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-brand-facebook">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="transition-transform hover:scale-110">
                                    <span className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-brand-x">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="transition-transform hover:scale-110">
                                    <span className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-brand-youtube">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                                            <path d="M10 9l5 3l-5 3z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-span-1">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 relative">
                                <span className="absolute bottom-0 left-0 w-16 h-1 bg-emerald-500"></span>
                                Quick Links
                            </h3>
                            <div className="grid grid-cols-2 gap-x-4">
                                {/* First Column */}
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                            Work
                                        </Link>
                                    </li>
                                </ul>

                                {/* Second Column */}
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/work" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                            Logo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                            Poster
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                            More
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-span-1">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 relative">
                                <span className="absolute bottom-0 left-0 w-16 h-1 bg-emerald-500"></span>
                                Contact
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                            <path d="M3 7l9 6l9 -6" />
                                        </svg>
                                    </span>
                                    <a href="mailto:info@llcreations.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                                        info@llcreations.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </span>
                                    <a href="tel:+1234567890" className="text-gray-300 hover:text-emerald-400 transition-colors">
                                        +123 456 7890
                                    </a>
                                </li>
                                {/* <li className="flex items-center">
                                    <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                        </svg>
                                    </span>
                                    <address className="text-gray-300 hover:text-emerald-400 transition-colors not-italic">
                                        Creative Studio, 123 Design Avenue, Innovation City
                                    </address>
                                </li> */}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        {/* <div className="col-span-1">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 relative">
                                <span className="absolute bottom-0 left-0 w-16 h-1 bg-emerald-500"></span>
                                Newsletter
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Subscribe to our newsletter for the latest updates and creative inspiration.
                            </p>
                            <form className="space-y-3">
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input 
                                        type="email" 
                                        placeholder="Your email address" 
                                        className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-grow"
                                        required
                                    />
                                    <button 
                                        type="submit" 
                                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 transition-colors text-white rounded-md"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-xs text-gray-400">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </form>
                        </div> */}
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="bg-gray-900 py-6 border-t border-gray-700">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <p className="text-gray-400 text-sm mb-4 md:mb-0">
                                &copy; {currentYear} LL Creations. All rights reserved.
                            </p>
                            {/* <div className="flex gap-4 text-sm text-gray-400">
                                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">
                                    Terms of Service
                                </Link>
                                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                                    Cookies
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;