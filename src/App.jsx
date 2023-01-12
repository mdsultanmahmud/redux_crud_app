import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AddService from "./pages/AddService"
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
