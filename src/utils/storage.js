// utils/storage.js

// Safely parse localStorage JSON and return an array
const getStoredUsers = () => {
  try {
    const data = JSON.parse(localStorage.getItem('datingAppUsers'));
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn('Failed to parse datingAppUsers from localStorage:', error);
    return [];
  }
};

// Save a new user to localStorage
export const saveUserData = (newUser) => {
  const users = getStoredUsers();
  users.push(newUser);
  localStorage.setItem('datingAppUsers', JSON.stringify(users));
};

// Get all users filtered by gender
export const getUsersByGender = (gender) => {
  const users = getStoredUsers();
  return users.filter(user => user.gender === gender);
};