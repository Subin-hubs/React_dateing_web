// pages/PhotoUploadPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUserData } from '../utils/storage';

const PhotoUploadPage = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userData = JSON.parse(localStorage.getItem('datingAppTempUser') || '{}');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);

      // Preview using base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!photo) {
      alert('Please upload a photo');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const completeUser = {
        ...userData,
        photo: preview, // base64 string
        id: Date.now().toString(),
      };

      saveUserData(completeUser);
      localStorage.removeItem('datingAppTempUser');

      if (completeUser.gender === 'Male') {
        navigate('/male-dashboard');
      } else {
        navigate('/female-dashboard');
      }

      setIsLoading(false);
    }, 1500); // Simulated delay
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-md mx-auto my-auto w-full px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Add Your Photo</h1>
          <p className="text-gray-600">Upload a profile picture to complete your account</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-40 h-40 rounded-full bg-gray-200 border-2 border-dashed flex items-center justify-center overflow-hidden">
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl">📷</span>
                )}
              </div>

              <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </label>
            </div>

            <p className="text-gray-600 text-center mb-6">
              Upload a clear photo of yourself. This helps others recognize you.
            </p>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full ${
                isLoading ? 'bg-pink-400' : 'bg-pink-500 hover:bg-pink-600'
              } text-white py-2.5 rounded-lg font-medium transition duration-300`}
            >
              {isLoading ? 'Processing...' : 'Complete Profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadPage;