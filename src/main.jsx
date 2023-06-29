import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="lg:max-w-7xl mx-auto border backdrop-blur-3xl">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
