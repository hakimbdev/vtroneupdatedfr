import React from 'react';
import SolutionsSection from '../components/SolutionsSection';
import ProductsSection from '../components/ProductsSection';

export default function SolutionsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Banking Solutions</h1>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-center text-gray-600 leading-relaxed">
            Experience the future of banking with our voice-enabled solutions. 
            From simple transfers to complex transactions, everything is just a voice command away.
          </p>
        </div>
        <SolutionsSection />
        <ProductsSection />
      </div>
    </div>
  );
}