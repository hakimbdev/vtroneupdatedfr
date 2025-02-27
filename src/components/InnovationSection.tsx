import React from 'react';

export default function InnovationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Innovation & Technology</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Advanced Energy Solutions</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our cutting-edge technology delivers unparalleled performance in portable power solutions. 
                Through innovative engineering and advanced battery management systems, we provide reliable, 
                efficient, and sustainable energy solutions for your needs.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Sustainable Future</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're committed to developing clean energy technologies that make a real difference. 
                Our R&D team continuously pushes the boundaries to create more efficient and 
                environmentally conscious power solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Reliability First</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every product we develop undergoes rigorous testing to ensure maximum reliability 
                and performance. Our proprietary technology ensures consistent power delivery 
                when you need it most.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">User-Centric Design</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in creating products that are not just powerful, but also intuitive 
                and easy to use. Our designs prioritize user experience without compromising 
                on functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}