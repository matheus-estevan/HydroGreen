import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SobreNos from "./pages/SobreNos.jsx"
import Referencias from "./pages/Referencias.jsx";
import Home from "./pages/Home.jsx";
import Guia from "./pages/Guia.jsx";
import Componentes from "./pages/Componentes.jsx";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },

  {
    path: "/referencias",
    element: <Referencias />
  },

  {
    path: '/sobrenos',
    element: <SobreNos />
  },

  {
    path: '/guiadeuso',
    element: <Guia />
  },

  {
    path: '/componentes',
    element: <Componentes />
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
