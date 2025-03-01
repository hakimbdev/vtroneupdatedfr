import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-600">123 Banking Avenue, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-600">support@oaibank.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div className="text-gray-600">
                <p>1-800-OAI-BANK</p>
                <p>24/7 Voice Banking Support</p>
              </div>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Support Hours</h3>
              <p className="text-gray-600">Voice Banking: 24/7 Available</p>
              <p className="text-gray-600">Customer Service: 24/7</p>
              <p className="text-gray-600">Branch Hours: 8:00 AM - 5:00 PM (Mon-Fri)</p>
            </div>
          </div>
          
          <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Account Number (Optional)</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your account number"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Support Request</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                placeholder="How can we assist you today?"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}