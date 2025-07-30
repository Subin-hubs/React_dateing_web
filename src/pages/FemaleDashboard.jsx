import React, { useState, useEffect } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import UserCard from '../components/UserCard';
import { getUsersByGender } from '../utils/storage';

const FemaleDashboard = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [maleUsers, setMaleUsers] = useState([]);

  useEffect(() => {
    if (showUsers) {
      const users = getUsersByGender('Male');
      setMaleUsers(users);
    }
  }, [showUsers]);

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {!showUsers ? (
          <div className="max-w-lg mx-auto text-center py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard</h1>
            <p className="text-gray-600 mb-8">
              Ready to find your perfect match? Click the button below to see available male users.
            </p>
            <button
              onClick={() => setShowUsers(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full text-lg font-medium transition duration-300"
            >
              Find Matches
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Available Male Users</h1>
            {maleUsers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {maleUsers.map(user => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-600 text-lg">No male users found. Please check back later.</p>
              </div>
            )}
          </div>
        )}
      </main>
      
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2023 DatingApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FemaleDashboard;