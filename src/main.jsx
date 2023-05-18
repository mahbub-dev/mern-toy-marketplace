import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/authProvider.jsx'
import {
  RouterProvider,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
