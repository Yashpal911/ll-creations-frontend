"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About", path: "/about", icon: "🧑‍💼" },
    { name: "Work", path: "/work", icon: "🖥️" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-30 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative overflow-hidden rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-blue-600 transition-all duration-300 group-hover:scale-110">
                <span className="font-bold text-white text-lg">LC</span>
                <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <span className="font-bold text-lg text-gray-900 group-hover:text-emerald-500 transition-colors">
                <span className="text-emerald-500">LL</span> Creations
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="relative overflow-hidden rounded-full group w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-emerald-50 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="size-6 group-hover:text-emerald-500 transition-transform group-hover:rotate-90 duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-200 rounded-full scale-0 group-hover:scale-100 transition-all duration-300"></span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:gap-x-1 headerLinks">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative group px-4 py-2 hover:no-underline"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <span className={`block text-lg font-semibold transition-all duration-300 ${
                  pathname === item.path 
                  ? "text-emerald-600" 
                  : "text-gray-700 group-hover:text-emerald-600"
                }`}>
                  {item.name}
                </span>
                <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-500 transform origin-left transition-all duration-300 ease-out ${
                  pathname === item.path 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-lg opacity-0 transition-all duration-300 ${
                  hoverIndex === index ? "opacity-100 translate-y-2" : ""
                }`}>
                  {item.icon}
                </span>
              </Link>
            ))}
          </div>

          {/* Contact Button - Smaller version with original style */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/contact" className="hover:no-underline">
              <button
                className="font-sans flex justify-center gap-2 items-center mx-auto shadow-md text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-3 overflow-hidden border-2 rounded-full group"
                type="submit"
              >
                Contact Us
                <img src="/svg/contact.svg" className="w-7 h-7 justify-end bg-gray-50 group-hover:rotate-0 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 -rotate-45"/>
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Empty space to prevent content from being hidden under fixed header */}
      <div className="h-20"></div>

      {/* Mobile Menu with Animation */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-gradient-to-br from-white to-emerald-50 px-6 py-6 shadow-2xl transform transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-blue-600">
              <span className="font-bold text-white text-lg">LC</span>
            </div>
            <span className="font-bold text-lg">
              <span className="text-emerald-500">LL</span> Creations
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-full w-10 h-10 flex items-center justify-center bg-emerald-50 hover:bg-emerald-100 text-emerald-600"
          >
            <span className="sr-only">Close menu</span>
            <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links with Animation */}
        <div className="mt-8 space-y-1">
          {navItems.concat([{ name: "Contact Us", path: "/contact", icon: "📞" }]).map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                pathname === item.path 
                ? "bg-emerald-100 text-emerald-700" 
                : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: mobileMenuOpen ? "translateX(0)" : "translateX(50px)",
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
              {pathname === item.path && (
                <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500"></span>
              )}
            </Link>
          ))}
        </div>
        
        {/* Social Media Icons */}
        <div className="absolute bottom-10 left-6 right-6">
          <p className="text-gray-500 mb-4 text-sm">Connect with us</p>
          <div className="flex space-x-4">
            {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((social, index) => (
              <a 
                key={social} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {social.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animated overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-500"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;