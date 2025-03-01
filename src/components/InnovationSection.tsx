import React from 'react';

export default function InnovationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Smart Banking Features</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Voice Banking</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the future of banking with our advanced voice recognition technology. 
                Simply speak your commands to transfer money, buy airtime, or check your balance - 
                no typing needed.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">AI-Powered Security</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our advanced AI system ensures your transactions are secure with 
                voice biometrics and real-time fraud detection, providing bank-grade 
                security for every transaction.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Smart Transactions</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Make instant payments, buy airtime, or subscribe to data plans using 
                simple voice commands. Our AI understands natural language, making 
                banking as easy as having a conversation.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">24/7 Voice Assistant</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get instant support anytime with our AI voice assistant. Check balances, 
                review transactions, or get help with your banking needs through 
                natural voice interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}