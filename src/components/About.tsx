import React from 'react';
import { CheckCircle } from 'lucide-react';

const values = [
  'Integrity in all our actions',
  'Innovation and continuous improvement',
  'Collaborative approach to success',
  'Excellence in every project'
];

export default function About() {
  return (
    <div id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80"
              alt="Team analyzing data"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Leading Marketing Excellence in Africa
            </h2>
            <p className="text-gray-600 mb-8">
              At Key-Seller Marketing Consultancy, we're dedicated to transforming businesses through 
              innovative, data-driven marketing solutions. Our mission is to empower businesses to 
              achieve their fullest potential through tailored marketing strategies that resonate with 
              the African market.
            </p>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}