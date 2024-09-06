import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ArticlePage from './pages/ArticlePage.jsx';
import ContactForm from './pages/ContactUs.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import TrendingNews from './pages/TrendingNews.jsx';
import LocalNews from './pages/LocalNews.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/readMore/:postId', 
    element: <ArticlePage />,
  },
  {
    path: '/contact', 
    element: <ContactForm />,
  },
  {
    path: '/trending-news', 
    element: <TrendingNews />,
  },
  {
    path: '/local-news', 
    element: <LocalNews />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
