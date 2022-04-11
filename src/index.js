import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthContextProvider } from './Context/AuthContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ReactDOM.render(
//   <React.StrictMode>

//    <AuthContextProvider>
//         <App />
//         </AuthContextProvider>
//      
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(container)
rootContainer.render(
  <React.StrictMode>
 <ToastContainer />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>

  </React.StrictMode>,
)

