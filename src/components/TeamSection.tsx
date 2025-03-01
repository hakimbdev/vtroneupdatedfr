import React from 'react';

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Join Oai Bank</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Business Integration</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Integrate our voice banking API into your business applications and offer your customers 
                  the future of banking today.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Voice payment integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Secure API access
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Technical support
                  </li>
                </ul>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Developer Access
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Banking Partners</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Partner with Oai Bank to offer your customers next-generation voice banking services.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    White-label solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Banking infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Compliance support
                  </li>
                </ul>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}