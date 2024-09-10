import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout';
import AllPlanets from './pages/AllPlanets';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
  },
  {
    path: '/allplanets',
    element:<AllPlanets></AllPlanets>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
