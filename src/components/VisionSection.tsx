import React from 'react';

const coreValues = [
  { title: "Innovation", description: "Pioneering voice-enabled banking solutions" },
  { title: "Security", description: "Ensuring top-tier protection of customer assets" },
  { title: "Accessibility", description: "Making banking services available to everyone" },
  { title: "Reliability", description: "Delivering consistent banking experience" },
  { title: "Integrity", description: "Maintaining highest banking standards" }
];

export default function VisionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Vision</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Vision Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To revolutionize banking through voice technology, making financial services more accessible, 
                intuitive, and secure for everyone, everywhere.
              </p>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mission Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide innovative voice-enabled banking solutions that simplify financial transactions, 
                enhance security, and deliver an unparalleled banking experience through cutting-edge AI technology.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="bg-white/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}