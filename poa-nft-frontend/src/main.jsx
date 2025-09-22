import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastProvider } from '@chakra-ui/toast'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ToastProvider> {/* <-- 2. Wrap your App */}
        <App />
      </ToastProvider>
    </ChakraProvider>
  </React.StrictMode>
);


