import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Find Your Perfect Match
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of singles finding meaningful connections on our trusted dating platform.
          </p>
          <Link 
            to="/signup" 
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium py-3 px-8 rounded-full inline-block transition duration-300"
          >
            Get Started
          </Link>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-pink-500">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Our platform ensures your privacy and security while you find your perfect partner.
              </p>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2023 DatingApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;