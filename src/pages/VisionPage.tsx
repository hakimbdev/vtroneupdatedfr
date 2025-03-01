import React from 'react';

const coreValues = [
  {
    title: "Innovation",
    description: "We continuously pioneer new voice banking technologies to enhance customer experience.",
    icon: "🎯"
  },
  {
    title: "Security",
    description: "We implement cutting-edge security measures to protect our customers' assets and data.",
    icon: "🔒"
  },
  {
    title: "Accessibility",
    description: "We make banking services available to everyone through intuitive voice commands.",
    icon: "🌐"
  },
  {
    title: "Reliability",
    description: "We ensure our banking services are available and consistent 24/7.",
    icon: "⚡"
  },
  {
    title: "Integrity",
    description: "We maintain the highest standards of banking ethics and transparency.",
    icon: "⭐"
  }
];

export default function VisionPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Our Vision & Mission</h1>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To revolutionize banking through voice technology, making financial services more accessible, 
              intuitive, and secure for everyone, everywhere. We envision a future where banking is as 
              natural as having a conversation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide innovative voice-enabled banking solutions that simplify financial transactions, 
              enhance security, and deliver an unparalleled banking experience through cutting-edge AI technology. 
              We strive to make banking more human-centric and accessible.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-blue-700">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}