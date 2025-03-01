import React from 'react';

export default function DashboardSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Welcome to Oai Bank</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Balance</h3>
              <p className="text-3xl font-bold mb-4">$12,345.67</p>
              <p className="text-sm opacity-80">Last updated: Just now</p>
            </div>
            
            <div className="bg-blue-500 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Quick Transfer</h3>
              <p className="mb-4">Say "Transfer money" to start</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Start Voice Command
              </button>
            </div>
            
            <div className="bg-blue-400 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Buy Airtime/Data</h3>
              <p className="mb-4">Quick voice purchase</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Start Voice Command
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Recent Transactions</h3>
            <div className="space-y-4">
              {[
                { type: 'Transfer', amount: '-$50.00', to: 'John Doe', date: 'Today' },
                { type: 'Airtime', amount: '-$10.00', to: 'Mobile Recharge', date: 'Yesterday' },
                { type: 'Received', amount: '+$500.00', from: 'Salary', date: '2 days ago' },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 border-b">
                  <div>
                    <p className="font-semibold">{transaction.type}</p>
                    <p className="text-sm text-gray-600">{transaction.to || transaction.from}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount}
                    </p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Voice Commands */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-6">Available Voice Commands</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold mb-2">"Check my balance"</p>
                <p className="text-gray-600">Get your current account balance</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold mb-2">"Transfer money"</p>
                <p className="text-gray-600">Start a money transfer</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold mb-2">"Buy airtime"</p>
                <p className="text-gray-600">Purchase mobile airtime</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold mb-2">"Recent transactions"</p>
                <p className="text-gray-600">View your transaction history</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 