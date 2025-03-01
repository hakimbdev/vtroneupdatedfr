import React from 'react';

export default function HeroSection(): JSX.Element {
  const backgroundImageUrl: string = 'https://res.cloudinary.com/dc5qncppu/image/upload/v1740816760/mJScoWY9eGMA5xR0-generated_image_qo8fqa.jpg';

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/40 to-blue-700/90" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <div className="flex items-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold ml-4">Oai Bank</h1>
        </div>

        <p className="text-xl md:text-2xl text-center max-w-2xl mb-12">
          Manage your finances with ease and security.
        </p>

        <div className="flex gap-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Place Your Order
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}