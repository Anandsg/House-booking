import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './properties/Properties';
import HouseDetailsContainer from './houses/HouseDetailsContainer';

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
      element: <HouseDetailsContainer />
    }
  ])
  return (

    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App