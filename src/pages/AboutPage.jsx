import React from 'react';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">About Our Dating App</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We're on a mission to create meaningful connections that last. In a world of swipe culture,
                we prioritize quality over quantity by focusing on compatibility and shared values.
              </p>
              <p className="text-gray-600">
                Founded in 2023, our platform has already helped thousands of singles find their perfect match
                through our unique compatibility matching system.
              </p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-96" />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-md p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-dashed mx-auto mb-4" />
                  <h3 className="font-bold text-lg">Team Member {item}</h3>
                  <p className="text-gray-600">Co-Founder</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Passionate about creating meaningful connections in the digital age.
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-pink-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Join Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Become part of our growing community of singles looking for genuine connections.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-2.5 px-8 rounded-lg font-medium transition duration-300">
              Create Your Profile
            </button>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2023 DatingApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;