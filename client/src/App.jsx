/* eslint-disable no-unused-vars */
// import logo from './logo.svg';

import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import LoginForm from './pages/forms/loginForm';
import SignupForm  from './pages/forms/signupForm';
import LoginAsAdmin from './pages/forms/loginAsAdmin';
import LoginAsOwner from './pages/forms/loginAsOwner';
import OwnerBookUpload from './pages/forms/uploadBook';
import AdminDashboard  from './pages/Admin/AdminDashboard';
import AdminBooks from './pages/Admin/AdminBooks';
import AdminOwners from './pages/Admin/AdminOwner';
import OwnerDashboard from './pages/Owner/ownerDashboard';
import OnDesktop1 from './pages/home/onDesktop1';
import OnDesktop2 from './pages/home/onDesktop2';
import OnMobile1 from './pages/home/onMobile1';
import OnMobile2 from './pages/home/onMobile2';

const router = createBrowserRouter([
  { path: '/', element: <OnDesktop2 /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/signup', element: <SignupForm />},
  { path: '/loginAsAdmin', element: <LoginAsAdmin />},
  { path: '/loginAsOwner', element: <LoginAsOwner />},
  { path: '/uploadBook', element: <OwnerBookUpload />},
  { path: '/adminDashboard', element: <AdminDashboard />},
  { path: '/adminBooks', element: <AdminBooks />},
  { path: '/adminOwner', element: <AdminOwners />},
  { path: '/ownerDashboard', element: <OwnerDashboard />},
  { path: '/onDesktop1', element: <OnDesktop1 />},
  { path: '/onDesktop2', element: <OnDesktop2 />},
  { path: '/onMobile1', element: <OnMobile1 />},
  { path: '/onMobile2', element: <OnMobile2 />},
]);

function App() {
  return (
    <div className="full-screen-container">
      <RouterProvider router={router} />
      </div>

  );
}

export default App;
