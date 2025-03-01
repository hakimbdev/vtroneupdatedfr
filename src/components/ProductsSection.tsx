import React from 'react';

const services = [
  {
    name: "Voice Banking Account",
    features: [
      "Zero maintenance fee",
      "Voice-activated transfers",
      "Real-time transactions",
      "AI-powered security"
    ],
    status: "current"
  },
  {
    name: "Digital Savings Account",
    features: [
      "High interest rates",
      "Automated savings",
      "Voice-activated deposits"
    ],
    status: "current"
  },
  {
    name: "Business Account",
    features: [
      "Bulk transactions",
      "Voice payment integration",
      "Business analytics"
    ],
    status: "current"
  },
  {
    name: "Student Account",
    features: [
      "Zero fees",
      "Educational savings",
      "Parental controls"
    ],
    status: "current"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Banking Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">• {feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Open Account
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}