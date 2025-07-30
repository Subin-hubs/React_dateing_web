import React from 'react';
import Header from '../components/Header';

const BlogPage = () => {
  const blogPosts = [
    { id: 1, title: "10 First Date Ideas That Actually Work", excerpt: "Creative ideas to make your first date memorable..." },
    { id: 2, title: "How to Create an Authentic Dating Profile", excerpt: "Tips for showcasing your true self..." },
    { id: 3, title: "Navigating Online Dating Safely", excerpt: "Essential safety tips for online daters..." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Dating Blog</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-pink-600 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-pink-500 hover:text-pink-600 font-medium">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2023 DatingApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;