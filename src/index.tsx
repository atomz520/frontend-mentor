import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import InteractiveRatingComponent from './challenges/interactive-rating-component/InteractiveRatingComponent';
import { ProductPreviewCard } from './challenges/product-preview-card/ProductPreviewCard';
import SkilledElearningLandingPage from './challenges/skilled-elearning-landing-page/SkilledElearningLandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/interactive-rating-component",
    element: <InteractiveRatingComponent />,
  },
  {
    path: "/product-preview-card",
    element: <ProductPreviewCard />,
  },
  {
    path: "/skilled-elearning-landing-page",
    element: <SkilledElearningLandingPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
