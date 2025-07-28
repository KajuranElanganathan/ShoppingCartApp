import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from "./Pages/Home.jsx"
import Shop from "./Pages/Shop.jsx"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([

{
  path:"/",
  element: <App/>,
  children: [
    {
      index:true,
      element:<Home/>
    },
    {
      path: 'shop',
      element: <Shop />

    }
  ]

}
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router = {router}/>


  </StrictMode>,
)
