import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './pages/Filmes.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Home from './pages/Home.jsx'
import PaginaFilmes from './pages/PaginaFilme.jsx'
import Search from './pages/Search.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
      {index: true, element: <Home/>},
      {path:"/", element: <Home/>},
      {path:"filmes", element: <Filmes/>},
      {path:"filmes/:id", element: <PaginaFilmes/>},
      {path:"sobre", element: <Sobre/>},
      {path:"contato", element: <Contato/>},
      {path:"search", element: <Search/>},
      {path:"*", element: <PageNotFound/>}
        
      ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)