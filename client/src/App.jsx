// import logo from './logo.svg';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import LoginForm from './pages/forms/loginForm';
import SignupForm  from './pages/forms/signupForm';
import LoginAsAdmin from './pages/forms/loginAsAdmin';
import LoginAsOwner from './pages/forms/loginAsOwner';
import OwnerBookUpload from './pages/forms/uploadBook';

const router = createBrowserRouter([
  { path: '/', element: <LoginForm /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/signup', element: <SignupForm />},
  { path: '/loginAsAdmin', element: <LoginAsAdmin />},
  { path: 'loginAsOwner', element: <LoginAsOwner />},
  { path: 'uploadBook', element: <OwnerBookUpload />}
]);

function App() {
  return (
      <RouterProvider router={router} />

  );
}

export default App;
