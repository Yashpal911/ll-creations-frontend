import React from 'react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 whitespace-nowrap">Welcome To <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold'>LL-Creation</span></h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">Please Wait till the Website is Loading</p>
        
        <div className="relative inline-block">
          <span className="text-5xl font-bold font-sans tracking-wider bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Loading</span>
          <span className="absolute left-0 top-0 text-5xl font-bold font-sans tracking-wider text-white overflow-hidden w-full animate-textReveal">Loading</span>
        </div>
      </div>
    </div>
  );
}