import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage.jsx';
import RegisterPage from './components/registerPage.jsx';
import HomePage from './components/homePage.jsx';
import Admin from './components/admin.jsx';
import DisplayPage from './components/displayPage.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer'; // Import the Footer component
import '../src/app.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<DisplayPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
}

export default App;
