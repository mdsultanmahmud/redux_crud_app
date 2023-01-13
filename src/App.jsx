import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AddService from "./pages/AddService"
import EditProducts from "./pages/EditProducts"
import Home from "./pages/Home"
import MyService from "./pages/MyService"
import './style.scss'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/myservices',
          element: <MyService></MyService>
        },
        {
          path: '/addservices',
          element: <AddService></AddService>
        },
        {
          path:'/editProducts/:id',
          element:<EditProducts></EditProducts>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
