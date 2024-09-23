import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Home from './pages/Home.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import ContactUs from './pages/ContactUs.jsx';
import SignIn from './pages/SignIn.jsx'; // Import the SignIn component
import Register from './pages/Register.jsx'; // Import the Register component
import Profile from './pages/ProfileEdit.jsx'; // Import the Profile component
import TrendingNews from './pages/TrendingNews.jsx';
import LocalNews from './pages/LocalNews.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/readMore/:postId',
        element: <ArticlePage />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/trending-news',
        element: <TrendingNews />,
      },
      {
        path: '/local-news',
        element: <LocalNews />,
      },
      {
        path: '/sign-in',
        element: <SignIn />, 
      },
      {
        path: '/register',
        element: <Register />, 
      },
      {
        path: '/profile',
        element: <Profile />, 
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
