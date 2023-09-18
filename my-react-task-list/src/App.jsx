import Home from './components/routes/Home.jsx'
import About from './components/routes/About.jsx'
import Tasks from './components/routes/Tasks.jsx'
import Menu from './components/routes/Menu.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/tasks',
    element: <Tasks />
  },
  {
    path: '/about',
    element: <About />
  }
])
export default function App() {
  return (

    <>
      <RouterProvider router={router} />
    </>
  )
}