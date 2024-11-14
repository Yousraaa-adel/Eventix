'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // use as context because we are use in many places :)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if the user is authenticated when the component mounts
  useEffect(() => {
    checkAuth(); // Call the authentication check when the component mounts
  }, []);

  // Function to check if the user is authenticated
  const checkAuth = async () => {
    try {
      console.log('1');
      console.log('Checking authentication...');
      const response = await axios.get(
        'http://localhost:5000/api/v1/users/check-auth',
        { withCredentials: true }
      );
      console.log('Auth response:', response.data);

      if (response.data.status === 'success') {
        setUser(response.data.user); // Store user info if authenticated
        console.log('Success login from Auth. Redirecting ..');

        // Redirect to dashboard after login success
        router.push('/admin/dashboard');
      } else {
        setUser(null); // Set user to null if not authenticated
      }
    } catch (err) {
      console.log('Not authenticated:', err);
      setUser(null); // If error occurs, set user to null
    } finally {
      setLoading(false); // Set loading to false once the check is complete
    }
  };

  const login = async (userData) => {
    setUser(userData); // Manually log the user in
    await checkAuth(); // Trigger checkAuth immediately after login
  };

  const logout = async () => {
    try {
      // Call backend to clear cookie
      const response = await axios.get(
        'http://localhost:5000/api/v1/users/logout',
        // {},
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );
      // console.log(response.data.message);

      // reset all to start again :)

      setUser(null); // Clear user data on the frontend
      setEmail('');
      setPassword('');

      // console.log('Logged out from frontend and backend');
      // await checkAuth();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        email,
        setEmail,
        password,
        setUser,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
