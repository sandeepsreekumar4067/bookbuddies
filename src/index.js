import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/homepage';
import NavigationBar from './components/navigationbar';
import Login from './components/login';
import Signup from './components/signup';
import NotFound from './components/notFound';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import { AuthProvider } from './components/authContext';
import Profile from './components/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <Router>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/profile" element={<Profile />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </Router>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
