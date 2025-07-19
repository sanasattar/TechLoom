import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Routers  from './router/RoutingIndex'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
)
