import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import HouseDetailsContainer from './propertyDetails/HouseDetailsContainer'


const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
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