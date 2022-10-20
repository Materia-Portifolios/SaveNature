import React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import { MainRoutes } from "./Router/MainRoutes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <Router>
      <ToastContainer
        theme="dark"
        progressStyle={{ background: '#15BE77' }}
        position="top-right"
        pauseOnHover={false}
        style={{ padding: '10px 20px' }}
      />
      <MainRoutes />
    </Router>
  )
}
