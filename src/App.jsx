// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page imports
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import PhotoUploadPage from './pages/PhotoUploadPage';
import MaleDashboard from './pages/MaleDashboard';
import FemaleDashboard from './pages/FemaleDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/upload-photo" element={<PhotoUploadPage />} />
        <Route path="/male-dashboard" element={<MaleDashboard />} />
        <Route path="/female-dashboard" element={<FemaleDashboard />} />
        {/* NEW ROUTES */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;