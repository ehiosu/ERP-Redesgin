import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth } from './Auth/Auth.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Layout } from './layout/layout.jsx'
import { Dashboard } from './Dashboard/Dashboard.jsx'
import { Landing } from './Landing/Landing.jsx'
import { Discuss } from './Discuss/Discuss.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
    <Route  path='/'  element={<Landing/>}/>
      <Route  path='/Auth'  element={<Auth/>}/>
      <Route  element={<Layout/>}>
          <Route  path='/Home'  element={<Dashboard/>}/>
          <Route  path='/Discuss'  element={<Discuss/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
