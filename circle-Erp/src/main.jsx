import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth } from './Auth/Auth.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Layout } from './layout/layout.jsx'
import { Dashboard } from './Dashboard/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
      <Route  path='/'  element={<Auth/>}/>
      <Route  element={<Layout/>}>
          <Route  path='/Home'  element={<Dashboard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
