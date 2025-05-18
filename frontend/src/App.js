import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopPage from './components/pages/shop';


function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <ShopPage />,
    },
    {

    },
  ])


  return (
    <div className="Main-Container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
