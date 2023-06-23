import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import AddEvents from '../components/addEvents';
import DisplayEvents from './displayEvents';

function HomePage() {
  const navigate = useNavigate();

  const signOut = async () => {
    console.log('Sign out button clicked');

    try {
      await auth.signOut();
      console.log('Successfully signed out');
      // Redirect to the login page
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1>Home Page</h1>
      <AddEvents />
      <DisplayEvents />
    </div>
  );
}

export default HomePage;
