import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';

import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';

function App() {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<User />} />
        <Route path="/login" element={isLoggedIn ? <Login /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
