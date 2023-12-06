import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './properties/Properties';
import HouseDetails from './houses/HouseDetails';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/properties',
      element: <Properties />
    },
    {
      path: '/properties/:id',
      element: <HouseDetails />
    }
  ])
  return (

    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App