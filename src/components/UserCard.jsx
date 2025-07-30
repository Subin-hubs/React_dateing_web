import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 border-2 border-dashed rounded-t-xl w-full" />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
        <p className="text-gray-600 mt-1">{user.email}</p>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {user.about || "No description available"}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
            {user.gender}
          </span>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;