import React from 'react';
import { Target, TrendingUp, Users, Megaphone, BarChart, Search } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Marketing Strategy Development',
    description: 'Comprehensive marketing plans tailored to your business goals and market conditions.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Effective SEO, SEM, social media, and content marketing campaigns.'
  },
  {
    icon: Users,
    title: 'Branding & Rebranding',
    description: 'Creating compelling brand identities that resonate with your target audience.'
  },
  {
    icon: Search,
    title: 'Market Research',
    description: 'In-depth market studies providing actionable insights and recommendations.'
  },
  {
    icon: BarChart,
    title: 'Customer Experience',
    description: 'Enhancing customer interactions to improve satisfaction and loyalty.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Analysis',
    description: 'Data-driven monitoring and optimization of marketing campaigns.'
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Innovative solutions driving business growth across Africa
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}