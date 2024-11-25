import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-blue-600 font-semibold text-lg">Innovate.Inspire.Impact.</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
                Empowering African Businesses Through Data-Driven Marketing
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Key-Seller Marketing Consultancy combines local market expertise with innovative 
              analytics to deliver transformative marketing solutions across Africa.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition">
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80"
              alt="African market analysis"
              className="rounded-lg shadow-xl col-span-2"
            />
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              alt="Data visualization"
              className="rounded-lg shadow-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80"
              alt="African business meeting"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}